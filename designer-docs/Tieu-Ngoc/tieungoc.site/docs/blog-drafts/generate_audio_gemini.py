import os, re, sys, json, struct, wave, base64

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Installing google-genai...")
    os.system(f"{sys.executable} -m pip install google-genai -q")
    from google import genai
    from google.genai import types

def parse_slides(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()
    raw_slides = re.split(r"\n---\n", content)
    slides = []
    for s in raw_slides:
        lines = s.strip().split("\n")
        notes = []
        body = []
        for line in lines:
            if line.startswith("^ "):
                notes.append(line[2:])
            else:
                body.append(line)
        speaker_note = " ".join(notes).strip()
        slides.append({"body": "\n".join(body).strip(), "notes": speaker_note})
    return slides

def generate_audio_gemini(text, output_path, voice="Kore"):
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERROR: GEMINI_API_KEY not set")
        return False

    client = genai.Client(api_key=api_key)

    response = client.models.generate_content(
        model="gemini-2.5-flash-preview-tts",
        contents=text,
        config=types.GenerateContentConfig(
            response_modalities=["AUDIO"],
            speech_config=types.SpeechConfig(
                voice_config=types.VoiceConfig(
                    prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=voice)
                )
            ),
        ),
    )

    audio_data = response.candidates[0].content.parts[0].inline_data.data

    with wave.open(output_path.replace(".mp3", ".wav"), "wb") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(24000)
        wf.writeframes(audio_data)

    wav_path = output_path.replace(".mp3", ".wav")
    mp3_path = output_path
    os.system(f'ffmpeg -y -i "{wav_path}" -codec:a libmp3lame -qscale:a 2 "{mp3_path}" -loglevel quiet')

    if os.path.exists(mp3_path) and os.path.getsize(mp3_path) > 0:
        os.remove(wav_path)
        return True
    else:
        if os.path.exists(wav_path):
            os.rename(wav_path, mp3_path.replace(".mp3", ".wav"))
        return True

def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_audio_gemini.py <slides.md> [--output-dir DIR]")
        sys.exit(1)

    md_path = sys.argv[1]
    output_dir = "audio"
    for i, arg in enumerate(sys.argv):
        if arg == "--output-dir" and i + 1 < len(sys.argv):
            output_dir = sys.argv[i + 1]

    os.makedirs(output_dir, exist_ok=True)

    slides = parse_slides(md_path)
    slides_with_notes = [(i, s) for i, s in enumerate(slides) if s["notes"]]

    print(f"Found {len(slides)} slides, {len(slides_with_notes)} with speaker notes")
    print(f"Generating audio with Gemini TTS (voice: Kore)...\n")

    success = 0
    for idx, (slide_num, slide) in enumerate(slides_with_notes):
        out_path = os.path.join(output_dir, f"slide_{idx}.mp3")
        print(f"  [{idx+1}/{len(slides_with_notes)}] Slide {slide_num}: {slide['notes'][:60]}...")

        try:
            ok = generate_audio_gemini(slide["notes"], out_path)
            if ok:
                size = os.path.getsize(out_path) if os.path.exists(out_path) else 0
                wav_fallback = out_path.replace(".mp3", ".wav")
                if not os.path.exists(out_path) and os.path.exists(wav_fallback):
                    size = os.path.getsize(wav_fallback)
                    out_path = wav_fallback
                print(f"    OK ({size/1024:.1f} KB)")
                success += 1
            else:
                print(f"    FAILED")
        except Exception as e:
            print(f"    ERROR: {e}")

    print(f"\nDone: {success}/{len(slides_with_notes)} audio files generated in {output_dir}/")

if __name__ == "__main__":
    main()

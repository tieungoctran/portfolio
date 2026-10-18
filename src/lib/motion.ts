import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fires once when the element first enters the viewport. Without IntersectionObserver it reports visible immediately. */
export function useInView<T extends Element>(rootMargin = '0px 0px -12% 0px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}

interface ParsedFigure {
  prefix: string;
  value: number;
  decimals: number;
  suffix: string;
  grouped: boolean;
}

// Splits a printed figure such as "~$25K", "−40%", "<0.4%" or "6,500+" into its counting parts
function parseFigure(text: string): ParsedFigure | null {
  const match = text.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const decimals = digits.includes('.') ? digits.split('.')[1].length : 0;
  return { prefix, value: Number(digits.replace(/,/g, '')), decimals, suffix, grouped: digits.includes(',') };
}

function formatFigure({ prefix, decimals, suffix, grouped }: ParsedFigure, current: number) {
  const fixed = current.toFixed(decimals);
  const body = grouped ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals }) : fixed;
  return `${prefix}${body}${suffix}`;
}

/** Counts a printed figure up from zero once `start` turns true. Reduced motion shows the final figure at once. */
export function useCountUp(text: string, start: boolean, { duration = 900, delay = 0 } = {}) {
  const [display, setDisplay] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    const parsed = parseFigure(text);
    if (!parsed || prefersReducedMotion()) {
      setDisplay(text);
      return;
    }
    if (!start) {
      if (!started.current) setDisplay(formatFigure(parsed, 0));
      return;
    }
    if (started.current) return;
    started.current = true;

    let frame = 0;
    let begin = 0;
    const tick = (now: number) => {
      if (!begin) begin = now + delay;
      const t = Math.min(1, Math.max(0, (now - begin) / duration));
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(t >= 1 ? text : formatFigure(parsed, parsed.value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, start, duration, delay]);

  return display;
}

/** Page scroll progress from 0 to 1, written to a CSS variable on the target element to avoid re-rendering. */
export function useScrollProgressVar<T extends HTMLElement>(variable = '--progress') {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      ref.current?.style.setProperty(variable, progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [variable]);

  return ref;
}

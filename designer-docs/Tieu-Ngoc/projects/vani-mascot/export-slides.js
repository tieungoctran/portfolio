const path = require('path');
const fs = require('fs');

const htmlPath = path.resolve(__dirname, 'behance-showcase.html');
const outDir = path.resolve(__dirname, 'behance-slides');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const WIDTH = 1400;

const slides = [
  { name: 'slide-01-hero',       sections: [0],    label: 'Hero' },
  { name: 'slide-02-concept',    sections: [1],    label: 'Concept' },
  { name: 'slide-03-turnaround', sections: [2],    label: 'Character Turnaround' },
  { name: 'slide-04-palette',    sections: [3],    label: 'Color Palette' },
  { name: 'slide-05-emotions',   sections: [4],    label: '5 Emotions' },
  { name: 'slide-06-poses',      sections: [5],    label: '5 Poses' },
  { name: 'slide-07-sticker',    sections: [6],    label: 'Sticker Pack' },
  { name: 'slide-08-process',    sections: [7],    label: 'Process' },
  { name: 'slide-09-stats',      sections: [8],    label: 'Stats' },
  { name: 'slide-10-credits',    sections: [9],    label: 'Credits' },
];

async function main() {
  const puppeteer = require('puppeteer-core');

  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: 900, deviceScaleFactor: 2 });
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForSelector('section');

  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    document.querySelectorAll('.hero').forEach(el => el.style.minHeight = 'auto');
    document.querySelectorAll('section + section').forEach(el => el.style.borderTop = 'none');
  });

  await new Promise(r => setTimeout(r, 1500));

  console.log(`Exporting ${slides.length} Behance slides...\n`);

  for (const slide of slides) {
    const filename = path.join(outDir, `${slide.name}.png`);

    await page.evaluate((indices) => {
      const allSections = document.querySelectorAll('section');
      allSections.forEach((s, i) => {
        s.style.display = indices.includes(i) ? '' : 'none';
      });
    }, slide.sections);

    await new Promise(r => setTimeout(r, 500));

    const bodyHandle = await page.$('body');
    await bodyHandle.screenshot({ path: filename });
    bodyHandle.dispose();

    await page.evaluate(() => {
      document.querySelectorAll('section').forEach(s => s.style.display = '');
    });

    const size = (fs.statSync(filename).size / 1024).toFixed(0);
    console.log(`  ${slide.name}.png (${size} KB) - ${slide.label}`);
  }

  await browser.close();
  console.log(`\nDone! ${slides.length} slides saved to behance-slides/`);
}

main().catch(e => { console.error('Error:', e.message); process.exit(1); });

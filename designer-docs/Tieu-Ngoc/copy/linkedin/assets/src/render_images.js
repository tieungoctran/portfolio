const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const filesToRender = [
  {
    html: path.join(__dirname, 'post1.html'),
    png: path.join(__dirname, '..', 'post1.png'),
    size: '1200,1200'
  },
  {
    html: path.join(__dirname, 'post2.html'),
    png: path.join(__dirname, '..', 'post2.png'),
    size: '1200,1200'
  }
];

function renderFile(file) {
  return new Promise((resolve, reject) => {
    console.log(`Rendering ${path.basename(file.html)} to ${path.basename(file.png)}...`);
    
    // Check if HTML exists
    if (!fs.existsSync(file.html)) {
      return reject(new Error(`HTML file not found: ${file.html}`));
    }
    
    const fileUrl = `file:///${file.html.replace(/\\/g, '/')}`;
    const screenshotArg = `--screenshot=${file.png}`;
    const sizeArg = `--window-size=${file.size}`;
    
    const args = [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      sizeArg,
      screenshotArg,
      fileUrl
    ];
    
    console.log(`Spawning Chrome with args:`, args);
    
    const chrome = spawn(CHROME_PATH, args);
    
    let stderr = '';
    chrome.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    chrome.on('close', (code) => {
      if (code === 0) {
        // Wait 1 second to make sure file is flushed to disk
        setTimeout(() => {
          if (fs.existsSync(file.png)) {
            console.log(`Success: Generated ${file.png} (${fs.statSync(file.png).size} bytes)`);
            resolve();
          } else {
            reject(new Error(`Chrome closed with code 0 but output file was not created. Stderr: ${stderr}`));
          }
        }, 1000);
      } else {
        reject(new Error(`Chrome failed with exit code ${code}. Stderr: ${stderr}`));
      }
    });
    
    chrome.on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  try {
    for (const file of filesToRender) {
      await renderFile(file);
    }
    console.log('All images rendered successfully!');
  } catch (err) {
    console.error('Error rendering images:', err);
    process.exit(1);
  }
}

main();

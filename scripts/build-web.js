// Copies the single-file web game into www/ (Capacitor's webDir).
// The game lives as index.html at the repo root (also what Vercel serves);
// this keeps one source of truth and produces the native app's web bundle.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const www = path.join(root, 'www');
fs.mkdirSync(www, { recursive: true });
fs.copyFileSync(path.join(root, 'index.html'), path.join(www, 'index.html'));

console.log('✓ Copied index.html → www/index.html');

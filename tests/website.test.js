import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');

test('HTML has a React mount point', () => {
  assert.match(html, /id="root"/);
});
test('Resume contains required sections', () => {
  for (const id of ['home', 'about', 'skills', 'projects', 'contact']) {
    assert.ok(app.includes(`id="${id}"`), `Missing section: ${id}`);
  }
});

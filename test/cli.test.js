// CLI integration tests for bin/recreate.js
// Keep initial test as a stub to check project/test plumbing.
import assert from 'node:assert';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import test from 'node:test';

test('CLI: should print confirmation on `recreate again`', (t, done) => {
  // Use node to run bin/recreate.js again
  const cliPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../bin/recreate.js');
  const child = spawn(process.execPath, [cliPath, 'again']);
  let output = '';
  child.stdout.on('data', (data) => { output += data.toString(); });
  child.stderr.on('data', () => {});
  child.on('close', (code) => {
    try {
      assert.strictEqual(code, 0);
      assert.match(output, /You ran: recreate again/);
      done();
    } catch (err) {
      done(err);
    }
  });
});

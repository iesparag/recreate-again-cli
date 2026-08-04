// Unit test for lib/commands.js
import assert from 'node:assert';
import { handleCommand } from '../lib/commands.js';
import test from 'node:test';

test('handleCommand: handles the again command', async () => {
  let output = '';
  const origLog = console.log;
  console.log = (msg) => { output += msg; };
  await handleCommand('again', { args: [] });
  console.log = origLog;
  assert(output.includes('You ran: recreate again'));
});

test('handleCommand: throws on unknown command', async () => {
  await assert.rejects(() => handleCommand('invalid', { args: [] }), /Unknown command/);
});

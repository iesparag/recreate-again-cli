#!/usr/bin/env node
import process from 'node:process';
import { handleCommand } from '../lib/commands.js';
import { loadConfig } from '../lib/config.js';

async function main() {
  try {
    // Prepare arguments (skip node and script path)
    const args = process.argv.slice(2);
    // Minimal command dispatcher: look for exact "recreate again"
    if (args.length === 2 && args[0] === 'again' && process.argv[1].endsWith('recreate.js')) {
      const config = await loadConfig();
      await handleCommand('again', { args: [], config });
      process.exit(0);
    } else if (args.length === 1 && args[0] === 'again') {
      // Allow: `recreate again` if symlinked as "recreate"
      const config = await loadConfig();
      await handleCommand('again', { args: [], config });
      process.exit(0);
    } else {
      printHelp();
      process.exit(1);
    }
  } catch (err) {
    printError(err);
    process.exit(2);
  }
}

function printHelp() {
  console.error('Usage: recreate again');
  console.error('A CLI tool stub. Only accepts the exact command: \'recreate again\'');
}

function printError(err) {
  console.error('[ERROR]', err && err.stack ? err.stack : String(err));
}

main();

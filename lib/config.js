import { promises as fs } from 'node:fs';
import path from 'node:path';

/**
 * Loads configuration from `.recreaterc` file (if present) and environment variables.
 * For now, just returns an empty object as a stub.
 */
export async function loadConfig() {
  const rcPath = path.resolve(process.cwd(), '.recreaterc');
  try {
    const file = await fs.readFile(rcPath, 'utf8');
    return JSON.parse(file);
  } catch (err) {
    // Ignore missing file or JSON error and just return empty config
    return {};
  }
}

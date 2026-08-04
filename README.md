# recreate-again-cli

A user-friendly CLI tool that only accepts the exact command `recreate again`, prints confirmation, handles errors gracefully, and is designed as a solid, reusable CLI scaffold for future expansion.

## Installation

Clone & install globally:

```sh
git clone https://github.com/iesparag/recreate-again-cli.git
cd recreate-again-cli
npm install
npm link    # (optional, for global 'recreate' command)
```

## Usage

```sh
recreate again
```

- Only the exact `recreate again` command is accepted.
- Any other input prints usage help and exits with status code 1.

## Configuration

- Optionally, a `.recreaterc` JSON file may exist in the working directory.
- See the included `.recreaterc` for an example structure (currently empty).

## Scripts

- `npm start` &ndash; Runs the CLI in dev mode.
- `npm test` &ndash; Runs all tests once (node:test, no watch).

## Environment Variables

None required at this stage. See `.env.example` as a starting point.

## Project Structure

- `bin/recreate.js` &ndash; CLI entrypoint
- `lib/commands.js` &ndash; CLI command handlers
- `lib/config.js` &ndash; Loads configuration (stub)
- `test/` &ndash; CLI and command handler tests

## License

MIT

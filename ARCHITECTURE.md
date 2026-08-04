# Architecture

## Components
- CLI Entrypoint (bin/recreate.js): Parses arguments, dispatches commands.
- Core Logic (lib/commands.js): Implements command handlers with input validation.
- Configuration Loader (lib/config.js) Optional: Reads config from environment and `.recreaterc` file.
- Tests (test/): Unit and integration testing covering CLI argument parsing and command execution.

## Folder Tree
```
/recreate-again-cli
  /bin
    recreate.js          # CLI executable script
  /lib
    commands.js          # command implementations and logic
    config.js            # config management
  /test
    cli.test.js          # integration & CLI arg parsing tests
    commands.test.js     # unit tests on command handlers
  package.json
  README.md
  .gitignore
  .recreaterc (optional config file example)
  .env.example
```

## Data Flow
User runs shell command `recreate again` → bin/recreate.js parses args → dispatch to commands.js → command runs and outputs to stdout/stderr → exit with proper code.

## Key Decisions
- Node.js chosen for its ubiquity and ease of CLI creation with ECMAScript modules.
- Using native Node.js test runner for simplicity and no extra dependencies.
- Minimal dependencies for maximum portability.
- Strict input validation to handle edge cases.
- Configuration via environment and optional config file for flexibility.
- Clear error messages and usage help display on invalid input.


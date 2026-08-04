export async function handleCommand(command, { args = [], config = {} } = {}) {
  // Only stub 'again' command for now
  if (command === 'again') {
    console.log('You ran: recreate again');
    return;
  }
  throw new Error(`Unknown command: ${command}`);
}

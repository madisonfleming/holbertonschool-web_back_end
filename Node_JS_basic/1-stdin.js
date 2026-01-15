const readline = require('node:readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});

process.stdout.write('Welcome to Holberton School, what is your name?');

r1.question('', (name) => {
  console.log(`Your name is: ${name}`);
  r1.close();
});

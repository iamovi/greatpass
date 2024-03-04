#!/usr/bin/env node

const { program } = require('commander');
const { generatePassword } = require('./passwordGenerator');

function getPasswordOptions() {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('Enter the length of the password: ', (length) => {
      readline.question('Include numbers? (Y/n): ', (numbers) => {
        numbers = numbers.trim() || 'Y';

        readline.question('Include uppercase letters? (Y/n): ', (uppercase) => {
          uppercase = uppercase.trim() || 'Y';

          readline.question('Include symbols? (Y/n): ', (symbols) => {
            symbols = symbols.trim() || 'Y';

            readline.question('Exclude ambiguous characters? (Y/n): ', (excludeAmbiguous) => {
              excludeAmbiguous = excludeAmbiguous.trim() || 'Y';

              readline.close();
              resolve({
                length: parseInt(length) || 8,
                numbers: numbers.toLowerCase() === 'y',
                uppercase: uppercase.toLowerCase() === 'y',
                symbols: symbols.toLowerCase() === 'y',
                excludeAmbiguous: excludeAmbiguous.toLowerCase() === 'y'
              });
            });
          });
        });
      });
    });
  });
}

async function main() {
  const options = await getPasswordOptions();
  const password = generatePassword(options);

  console.log('Your generated password:', password);
}

main();

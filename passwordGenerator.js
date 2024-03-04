// passwordGenerator.js

function generatePassword(options) {
    const length = parseInt(options.length);
    const hasNumbers = options.numbers;
    const hasSymbols = options.symbols;
  
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (hasNumbers) charset += '0123456789';
    if (hasSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  module.exports = { generatePassword };
  
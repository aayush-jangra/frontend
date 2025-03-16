const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}";

export const useGeneratePassword = () => {
  const generatePassword = (config, length) => {
    let superSet = "";
    let password = "";
    let remainingLength = Number(length);

    if (config.uppercase) {
      superSet += UPPERCASE;
      password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
      remainingLength--;
    }

    if (config.lowercase) {
      superSet += LOWERCASE;
      password += LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)];
      remainingLength--;
    }

    if (config.numbers) {
      superSet += NUMBERS;
      password += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
      remainingLength--;
    }

    if (config.symbols) {
      superSet += SYMBOLS;
      password += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      remainingLength--;
    }

    if (superSet === "") {
      superSet = LOWERCASE;
    }

    for (let i = 0; i < remainingLength; i++) {
      password += superSet[Math.floor(Math.random() * superSet.length)];
    }

    return password;
  };

  return generatePassword;
};

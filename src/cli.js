import readlineSync from 'readline-sync';

const salutation = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

// eslint-disable-next-line import/prefer-default-export
export { salutation };

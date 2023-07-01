import readlineSync from 'readline-sync';

const salutation = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

export default salutation;

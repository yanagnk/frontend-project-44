import startGame from '../index.js';
import randomNumber from '../utils.js';

const taskGcd = 'Find the greatest common divisor of given numbers.';

const getGcd = () => {
  let x;
  let y;

  while (y !== 0) {
    const remainder = x % y;
    x = y;
    y = remainder;
  }
  return x;
};

const getGcdRoundData = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);

  const correctAnswerGcd = String(getGcd(number1, number2));

  const questionGcd = `${number1} ${number2}`;

  return [questionGcd, correctAnswerGcd];
};

const startGcdGame = () => {
  startGame(getGcdRoundData, taskGcd);
};

export default startGcdGame;

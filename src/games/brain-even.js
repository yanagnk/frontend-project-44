import startGame from '../index.js';
import randomNumber from '../utils.js';

const taskEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const getEvenRoundData = () => {
  const number = randomNumber(1, 100);
  const questionEven = number;
  const correctAnswerEven = isEven(number) ? 'yes' : 'no';
  return [questionEven, correctAnswerEven];
};

const startEvenGame = () => {
  startGame(getEvenRoundData, taskEven);
};

export default startEvenGame;

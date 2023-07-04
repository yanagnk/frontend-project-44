/* eslint-disable import/extensions */
import _ from 'lodash';
import startGame from '../index.js';

const taskEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isCorrect = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const isEven = () => {
  const number = _.random(1, 100);
  const questionEven = number;
  const correctAnswerEven = isCorrect(number);
  return [questionEven, correctAnswerEven];
};

const startEvenGame = () => {
  startGame(isEven, taskEven);
};

export default startEvenGame;

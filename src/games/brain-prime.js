/* eslint-disable import/extensions */
import _ from 'lodash';
import startGame from '../index.js';

const taskPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if ((num % i === 0) || (num === 1)) {
      return 'no';
    }
  }
  return 'yes';
};

const getPrimeResult = () => {
  const number = _.random(1, 100);

  const correctAnswerPrime = isPrime(number);

  const questionPrime = number;

  return [questionPrime, correctAnswerPrime];
};

const startPrimeGame = () => {
  startGame(getPrimeResult, taskPrime);
};

export default startPrimeGame;

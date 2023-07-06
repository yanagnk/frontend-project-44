import { startGame, randomNumber } from '../index.js';

const taskPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeResult = () => {
  const number = randomNumber(1, 100);

  const correctAnswerPrime = isPrime(number) ? 'yes' : 'no';

  const questionPrime = number;

  return [questionPrime, correctAnswerPrime];
};

const startPrimeGame = () => {
  startGame(getPrimeResult, taskPrime);
};

export default startPrimeGame;

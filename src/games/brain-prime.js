import startGame from '../index.js';
import randomNumber from '../utils.js';

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

const getPrimeRoundData = () => {
  const questionPrime = randomNumber(1, 100);

  const correctAnswerPrime = isPrime(questionPrime) ? 'yes' : 'no';

  return [questionPrime, correctAnswerPrime];
};

const startPrimeGame = () => {
  startGame(getPrimeRoundData, taskPrime);
};

export default startPrimeGame;

import { startGame, randomNumber } from '../index.js';

const taskPrg = 'What number is missing in the progression?';

const getPrgResult = () => {
  const getRandomArr = () => {
    const number = randomNumber(1, 100);

    const result = [number];
    const step = randomNumber(2, 9);
    const randomQuantity = randomNumber(5, 10);

    for (let j = 0; j < randomQuantity; j += 1) {
      result.push(result[j] + step);
    }
    return result;
  };

  const randomArr = getRandomArr();

  const charIndex = randomNumber(0, (randomArr.length - 1));

  const hiddenCharPrg = String(randomArr[charIndex]);

  randomArr[charIndex] = '..';

  const questionPrg = `${randomArr.join(' ')}`;

  return [questionPrg, hiddenCharPrg];
};

const startPrgGame = () => {
  startGame(getPrgResult, taskPrg);
};

export default startPrgGame;

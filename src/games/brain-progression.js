/* eslint-disable import/extensions */
import _ from 'lodash';
import startGame from '../index.js';

const taskPrg = 'What number is missing in the progression?';

const getPrgResult = () => {
  const getRandomArr = () => {
    const number = _.random(1, 100);

    const result = [number];
    const step = _.random(2, 9);
    const randomQuantity = _.random(5, 10);

    for (let j = 0; j < randomQuantity; j += 1) {
      result.push(result[j] + step);
    }
    return result;
  };

  const randomArr = getRandomArr();

  const charIndex = _.random(0, (randomArr.length - 1));

  const hiddenCharPrg = String(randomArr[charIndex]);

  randomArr[charIndex] = '..';

  const questionPrg = `${randomArr.join(' ')}`;

  return [questionPrg, hiddenCharPrg];
};

const startPrgGame = () => {
  startGame(getPrgResult, taskPrg);
};

export default startPrgGame;

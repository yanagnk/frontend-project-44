import startGame from '../index.js';
import randomNumber from '../utils.js';

const taskPrg = 'What number is missing in the progression?';
const lengthPrg = 7;

const getProgression = (first, step) => {
  const chars = [];
  for (let i = 0; i <= lengthPrg; i += 1) {
    chars.push(first + i * step);
  }
  return chars;
};

const getPrgRoundData = () => {
  const first = randomNumber(1, 100);
  const step = randomNumber(2, 9);
  const charIndex = randomNumber(0, lengthPrg);
  const progression = getProgression(first, step);

  const hiddenCharPrg = String(progression[charIndex]);

  progression[charIndex] = '..';

  const questionPrg = `${progression.join(' ')}`;

  return [questionPrg, hiddenCharPrg];
};

const startPrgGame = () => {
  startGame(getPrgRoundData, taskPrg);
};

export default startPrgGame;

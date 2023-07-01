#!/usr/bin/env node

import readlineSync from 'readline-sync';
import _ from 'lodash';

const startPrgGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);

  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
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

    const charIndex = _.random(0, randomArr.length);

    const hiddenChar = randomArr[charIndex];

    randomArr[charIndex] = '...';

    const userAnswer = readlineSync.question(`Question: ${randomArr} \nYour answer: `);

    if (Number(userAnswer) === hiddenChar) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenChar}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startPrgGame();

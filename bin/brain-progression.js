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
 
      let number = _.random(1, 100);
      let result = [number];
      let step = _.random(2, 9);
      let randomQuantity = _.random(5, 10);
     
            for (let i = 0; i < randomQuantity; i += 1) {
                result.push(result[i]+step)
               }
      return result;
    };

    const charIndex = _.random(0, getRandomArr().length - 1);

    const getArrWithoutChar = (arr) => {
      const newArr = arr.slice(0);
      
    newArr[charIndex] = '...';
        return newArr;
      };

      getArrWithoutChar(getRandomArr);

    const correctAnswer = getRandomArr[charIndex];

    const userAnswer = readlineSync.question(`Question: ${getArrWithoutChar()}
Your answer: `);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations,${userName}!`);
};

startPrgGame();

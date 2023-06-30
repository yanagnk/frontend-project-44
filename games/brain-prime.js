#!/usr/bin/env node

import readlineSync from 'readline-sync';
import _ from 'lodash';

const startPrimeGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = _.random(1, 100);

    const isPrime = (num) => {
      for (let j = 2; j <= num / 2; j += 1) {
        if (num % j === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    const correctAnswer = isPrime(number);

    const userAnswer = readlineSync.question(`Question: ${number}
Your answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations,${userName}!`);
};

startPrimeGame();

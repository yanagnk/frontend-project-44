#!/usr/bin/env node

import readlineSync from 'readline-sync';
import _ from 'lodash';

const startGcdGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const number1 = _.random(1, 100);
    const number2 = _.random(1, 100);

    const getDivisors = (num) => {
      const result = [];
      for (let j = 1; j <= num; j += 1) {
        if (num % j === 0) {
          result.push(j);
        }
      }
      return result;
    };

    const Divisors1 = getDivisors(number1);
    const Divisors2 = getDivisors(number2);

    const getCommonDivisorsArr = (arr1, arr2) => {
      const result = [];
      for (let k = 0; k < arr1.length; k += 1) {
        for (let l = 0; l < arr2.length; l += 1) {
          if (arr2[l] === arr1[k]) {
            result.push(arr2[l]);
          }
        }
      }
      return result;
    };

    const commonDivisorsArr = getCommonDivisorsArr(Divisors1, Divisors2);

    const getGreatestDivisor = (arr) => {
      let result = arr[0];
      for (let m = 1; m < arr.length; m += 1) {
        if (arr[m] > result) {
          result = arr[m];
        }
      }
      return result;
    };

    const correctAnswer = getGreatestDivisor(commonDivisorsArr);

    const userAnswer = readlineSync.question(`Question: ${number1} ${number2}  \nYour answer: `);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startGcdGame();

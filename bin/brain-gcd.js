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
      for (let i = 1; i <= num; i += 1) {
        if (num % i === 0) {
          result.push(i);
        }
      }
      return result;
    };

    const Divisors1 = getDivisors(number1);
    const Divisors2 = getDivisors(number2);

    const getCommonDivisorsArr = (arr1, arr2) => {
      const result = [];
      for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
          if (arr2[j] === arr1[i]) {
            result.push(arr2[j]);
          }
        }
      }
      return result;
    };

    const commonDivisorsArr = getCommonDivisorsArr(Divisors1, Divisors2);

    const getGreatestDivisor = (arr) => {
      let result = arr[0];
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > result) {
          result = arr[i];
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
  console.log(`Congratulations,${userName}!`);
};

startGcdGame();

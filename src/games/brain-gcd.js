/* eslint-disable import/extensions */
import _ from 'lodash';
import startGame from '../index.js';

const taskGcd = 'Find the greatest common divisor of given numbers.';

const getDivisors = (num) => {
  const result = [];
  for (let j = 1; j <= num; j += 1) {
    if (num % j === 0) {
      result.push(j);
    }
  }
  return result;
};

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

const getGreatestDivisor = (arr) => {
  let result = arr[0];
  for (let m = 1; m < arr.length; m += 1) {
    if (arr[m] > result) {
      result = arr[m];
    }
  }
  return result;
};

const getGcdResult = () => {
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);

  const Divisors1 = getDivisors(number1);
  const Divisors2 = getDivisors(number2);

  const commonDivisorsArr = getCommonDivisorsArr(Divisors1, Divisors2);

  const correctAnswerGcd = String(getGreatestDivisor(commonDivisorsArr));

  const questionGcd = `${number1} ${number2}`;

  return [questionGcd, correctAnswerGcd];
};

const startGcdGame = () => {
  startGame(getGcdResult, taskGcd);
};

export default startGcdGame;

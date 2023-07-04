/* eslint-disable import/extensions */
import _ from 'lodash';
import startGame from '../index.js';

const taskCalc = 'What is the result of the expression?';

const calculatedExpression = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      console.log('Error');
  }
  return result;
};

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const getCalcResult = () => {
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);

  const newOperator = randomOperator();

  const correctAnswerCalc = String(calculatedExpression(number1, number2, newOperator));

  const questionCalc = `${number1} ${newOperator} ${number2}`;

  return [questionCalc, correctAnswerCalc];
};

const startCalcGame = () => {
  startGame(getCalcResult, taskCalc);
};

export default startCalcGame;

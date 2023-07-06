import { startGame, randomNumber } from '../index.js';

const taskCalc = 'What is the result of the expression?';

const calculatedExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = randomNumber(0, operators.length);
  return operators[randomIndex];
};

const getCalcResult = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);

  const newOperator = randomOperator();

  const correctAnswerCalc = String(calculatedExpression(number1, number2, newOperator));

  const questionCalc = `${number1} ${newOperator} ${number2}`;

  return [questionCalc, correctAnswerCalc];
};

const startCalcGame = () => {
  startGame(getCalcResult, taskCalc);
};

export default startCalcGame;

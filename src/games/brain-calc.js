import startGame from '../index.js';
import randomNumber from '../utils.js';

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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getCalcRoundData = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);

  const operators = ['+', '-', '*'];
  const randomIndex = randomNumber(0, 2);

  const newOperator = operators[randomIndex];

  const correctAnswerCalc = String(calculatedExpression(number1, number2, newOperator));

  const questionCalc = `${number1} ${newOperator} ${number2}`;

  return [questionCalc, correctAnswerCalc];
};

const startCalcGame = () => {
  startGame(getCalcRoundData, taskCalc);
};

export default startCalcGame;

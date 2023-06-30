#!/usr/bin/env node

import readlineSync from 'readline-sync';

const startCalcGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);

  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const number1 = Math.floor((Math.random() * 100) + 1);
    const number2 = Math.floor((Math.random() * 100) + 1);

    const getRandomOperator = () => {
      const operators = ['+', '-', '*'];
      const randomIndex = Math.floor(Math.random() * operators.length);
      return operators[randomIndex];
    };

    const newOperator = getRandomOperator();

    const calculateExpression = (num1, num2, operator) => {
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
          return;
      }
      return result;
    };

    const correctAnswer = calculateExpression(number1, number2, newOperator);

    const userAnswer = readlineSync.question(`Question: ${number1} ${newOperator} ${number2}
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

startCalcGame();
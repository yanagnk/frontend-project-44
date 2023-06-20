import readlineSync from 'readline-sync';
import { salutation } from '../src/cli.js';

const startGame = () => {

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= 3; i += 1) {

const number = Math.floor(Math.random() * 101);
const isCorrect = (num) => (num % 2 === 0) ? 'yes' : 'no';
const correctAnswer = isCorrect(number);

    const userAnswer = readlineSync.question(`Question: ${number}
Your answer: `);

    if (userAnswer === correctAnswer) {
              console.log ('Correct!');
            } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
       return;
            }
        }
    console.log(`Congratulations,${userName}!`);
    return;
}

export { startGame };


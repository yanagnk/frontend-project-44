import readlineSync from 'readline-sync';

const number = Math.floor(Math.random() * 101);
const isCorrect = (num) => (num % 2 === 0) ? 'yes' : 'no';
const correctAnswer = isCorrect(number);


const startGame = () => {

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const userAnswer = readlineSync.question(`Question: ${number}
Your answer: `);

    const startRound = () => {

    
        
        if (userAnswer === correctAnswer) {
              console.log ('Correct!');
            } 
            return false;
        };

        if (!startRound()) {
        return (`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, USERNAME!`);
    }
return 'Congratulations, USERNAME!';
}

startGame();


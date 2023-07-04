import readlineSync from 'readline-sync';

const startGame = (playGame, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);

  console.log(task);

  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = playGame();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;

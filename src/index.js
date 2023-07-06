import readlineSync from 'readline-sync';

const startGame = (playGame, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);

  console.log(task);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
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

const randomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export { startGame, randomNumber };

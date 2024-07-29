import ora from 'ora';
import * as spinners from 'cli-spinners';

export function spinner(teamArray, enemyTeamArray) {
  // First spinner setup and start
  const firstSpinner = ora({
    text: 'Your team is being prepared...',
    spinner: spinners.dots,
  });

  firstSpinner.start();

  // First spinner's task simulation (e.g., enemy choosing team)
  setTimeout(() => {
    firstSpinner.succeed(`Your team is: ${teamArray.join(", ")}`);

    // Start the second spinner after the first one completes
    const secondSpinner = ora({
      text: 'Your enemy is choosing their team...',
      spinner: spinners.dots12, // A different spinner style for variety
    });

    secondSpinner.start();

    // Second spinner's task simulation (e.g., setting up the game environment)
    setTimeout(() => {
      secondSpinner.succeed(`Your enemy's team is: ${enemyTeamArray.join(", ")}`);
    }, 5000); // Another 5 seconds delay for the second task
  }, 5000); // 5 seconds delay for the first task
}

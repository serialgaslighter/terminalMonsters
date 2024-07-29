import ora from 'ora';
import * as spinners from 'cli-spinners';

export function spinner(teamArray) {
  const spinner = ora({
    text: 'The enemy is choosing his team',
    spinner: spinners.dots, // Access the dots spinner from the imported module
  });
  
  spinner.start();
  
  setTimeout(() => {
    spinner.succeed(`The enemy's team is: ${teamArray.join(", ")}`);
  }, 5000);
}
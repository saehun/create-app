import * as execa from 'execa';
import * as ora from 'ora';

const git = ({ initialCommit = false }: { initialCommit?: boolean } = {}) => {
  let spinner = ora('git init');
  execa.sync('git', ['init'], { stdio: 'ignore' });
  spinner.succeed();

  if (initialCommit) {
    spinner = ora(`git add * && git commit -m 'Initialzie'`);
    execa.sync('git', ['add', '*'], { stdio: 'ignore' });
    execa.sync('git', ['commit', '-m', '"Initialize"'], { stdio: 'ignore' });
    spinner.succeed();
  }
};

const yarn = () => {
  const spinner = ora(`yarn install`);
  execa.sync('yarn', { stdio: 'ignore' });
  spinner.succeed();
};

export const init = { git, yarn };

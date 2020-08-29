import * as execa from 'execa';
import * as ora from 'ora';
import { writeSync } from 'clipboardy';

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

const nextCommand = (cmd: string) => {
  writeSync(cmd);
  console.log(`'${cmd}' to start your application (copied)`);
};

export const init = { git, yarn, nextCommand };

import * as execa from 'execa';

const git = ({ initialCommit = false }: { initialCommit?: boolean } = {}) => {
  execa.sync('git', ['init'], { stdio: 'inherit' });
  if (initialCommit) {
    execa.sync('git', ['add', '*'], { stdio: 'inherit' });
    execa.sync('git', ['commit', '-m', '"Initialize"'], { stdio: 'inherit' });
  }
};

const yarn = () => {
  execa.sync('yarn', { stdio: 'inherit' });
};

export const init = { git, yarn };

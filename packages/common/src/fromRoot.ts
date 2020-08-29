import * as fs from 'fs-extra';
import * as path from 'path';
import { defer } from './defer';
import * as ora from 'ora';

const create = (projectName: string) => {
  const basePath = path.join(process.cwd(), projectName);
  if (fs.existsSync(basePath)) {
    throw new Error(`directory already exist: ${basePath}`);
  }

  let spinner = ora(`mkdir -p ${projectName}`).start();
  fs.ensureDirSync(basePath);
  spinner.succeed();

  spinner = ora(`cd ${projectName}`).start();
  process.chdir(basePath);
  spinner.succeed();

  defer(() => fs.removeSync(basePath), `remove ${basePath}`);
};

export const fromRoot = { create };

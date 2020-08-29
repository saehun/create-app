import * as fs from 'fs-extra';
import * as path from 'path';
import { defer } from './defer';

const create = (projectName: string) => {
  const basePath = path.join(process.cwd(), projectName);
  if (fs.existsSync(basePath)) {
    throw new Error(`directory already exist: ${basePath}`);
  }

  fs.ensureDirSync(basePath);
  console.log(`mkdir -p ${projectName}`);

  process.chdir(basePath);
  console.log(`cd ${projectName}`);

  defer(() => fs.remove(basePath), `remove ${basePath}`);
};

export const fromRoot = { create };

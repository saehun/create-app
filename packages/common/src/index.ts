import * as fs from 'fs';
import * as path from 'path';
const test = () => {
  console.log('it is common packages');
};

const ls = (path: string, type: 'file' | 'directory' | 'all' = 'all') =>
  fs
    .readdirSync(path, { withFileTypes: true })
    .filter(f => (type === 'file' ? f.isFile() : type === 'directory' ? f.isDirectory() : true))
    .map(f => f.name);

/**
 * make directory recursive
 *
 * @param name - path name
 *
 * @deprecated - use fs.mkdir(p, {recursive:true}) instead
 */
const mkdir = (name: string) => {
  let base = process.cwd();
  const paths = name
    .replace(/^\./, '')
    .split('/')
    .filter(x => x !== '')
    .reverse();

  while (paths.length) {
    const name = paths.pop();
    if (name == null) break;

    const files = ls(base, 'file');
    const dirs = ls(base, 'directory');

    if (files.includes(name)) {
      throw new Error(`cannot create ${name}. already exist`);
    } else {
      base = path.join(base, name);
      if (!dirs.includes(name)) {
        fs.mkdirSync(base);
      }
    }
  }
};

export { test, ls, mkdir };

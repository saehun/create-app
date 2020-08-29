import axios from 'axios';
import * as ora from 'ora';
import * as paths from 'path';
import * as chalk from 'chalk';
import * as fs from 'fs-extra';
import { format } from './format';
import { defer } from './defer';

const save = (path: string, data: any) => {
  if (fs.existsSync(path)) {
    throw new Error(`Cannot create ${path}: file already exist.`);
  }

  const source = typeof data !== 'string' ? JSON.stringify(data, undefined, 2) : data;

  fs.outputFileSync(path, format(source));

  const absolutePath = paths.resolve(path);
  defer(() => fs.removeSync(absolutePath), `remove ${absolutePath}`);
};

const log = (type: string, path: string, source: string) => {
  return ora(`create ${chalk.green(path)} from ${type} ` + chalk.greenBright(`'${source.slice(0, 40)}'`)).start();
};

export function file(path: string) {
  const fromText = async (text: string) => {
    const spinner = log('text', path, text);

    save(path, text);
    spinner.succeed();

    return;
  };

  const fromRemote = async (url: string) => {
    const spinner = log('remote', path, url);

    const { data } = await axios.get(url);

    save(path, data);
    spinner.succeed();

    return;
  };

  const fromGist = async (url: string | { id: string; filename: string }) => {
    let id = url;
    let filename = path;
    if (typeof url === 'object') {
      ({ id, filename } = url);
    }

    const spinner = log('gist', path, filename);

    const { data } = await axios.get(`https://api.github.com/gists/${id}`);
    const raw = data.files?.[filename]?.content;
    if (!raw) {
      throw new Error(`gist doesn't exist ${id}/${filename}`);
    }

    save(path, raw);
    spinner.succeed();

    return;
  };

  const fromLocal = async (path: string) => {
    const spinner = log('local', path, path);

    const text = await fs.readFile(path, 'utf-8');

    save(path, text);
    spinner.succeed();

    return;
  };

  return { fromText, fromRemote, fromLocal, fromGist };
}

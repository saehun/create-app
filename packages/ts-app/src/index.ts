import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

// prettier-ignore
const gistUrls = {
  'package.json': 'https://gist.githubusercontent.com/minidonut/84cf4f084328f2044d26c3b849d0fada/raw/0318a4e86407250bf2a57a42be6bad835c43cb2b/package.json-template-1',


} as const;

const fromRemote = <T extends Record<string, string>>(urls: T) => async (key: keyof T): Promise<string> => {
  const url = urls[key];
  console.log(`download ${url.slice(0, 64)}...`);
  const { data } = await axios.get(url);
  return JSON.stringify(data, undefined, 2);
};

const fromGist = fromRemote(gistUrls);

const touch = (filename: string) => {
  const absolutePath = path.resolve(filename);
  const dirname = path.dirname(filename);
  fs.mkdirSync(dirname, { recursive: true });
  fs.writeFileSync(absolutePath, '');

  const text = (data: string): void => {
    fs.writeFileSync(absolutePath, data);
  };

  const gist = async (key: Parameters<typeof fromGist>[0]) => {
    const data = await fromGist(key);
    fs.writeFileSync(absolutePath, data);
  };

  return { text, gist };
};

(async function () {
  const name = process.argv[2];
  if (name == null) {
    console.error(`specify project name`);
    process.exit(1);
  }
  fs.mkdirSync(name);
  process.chdir(name);

  touch('src/index.ts').text(`console.log('hello world!')`);
  await touch('package.json').gist('package.json');
})();

import * as fs from 'fs';
import * as path from 'path';

const touch = (filename: string) => {
  const absolutePath = path.resolve(filename);
  const dirname = path.dirname(filename);
  fs.mkdirSync(dirname, { recursive: true });
  fs.writeFileSync(absolutePath, '');

  return {
    pipe: (data: string | Promise<string>): void | Promise<void> => {
      if (typeof data === 'string') {
        fs.writeFileSync(absolutePath, data);
      } else {
        return data.then(d => fs.writeFileSync(absolutePath, d));
      }
    },
  };
};

(function () {
  const name = process.argv[2];
  if (name == null) {
    console.error(`specify project name`);
    process.exit(1);
  }
  fs.mkdirSync(name);
  process.chdir(name);

  touch('src/index.ts').pipe(`console.log('hello world!')`);
  touch('package.json').pipe('{}');
})();

import * as fs from 'fs';
const test = () => {
  console.log('it is common packages');
};

const ls = (path: string, type: 'file' | 'directory' | 'all' = 'all') =>
  fs
    .readdirSync(path, { withFileTypes: true })
    .filter(f => (type === 'file' ? f.isFile() : type === 'directory' ? f.isDirectory() : true))
    .map(f => f.name);

export { test, ls };

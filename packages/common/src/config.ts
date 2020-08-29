import * as os from 'os';
import * as path from 'path';
import * as chalk from 'chalk';
import * as fs from 'fs-extra';

const CONFIG_PATH = path.join(os.homedir(), '.config', '.create-app.json');
let cache: Record<string, string> | null = null;

const load = () => {
  console.log(chalk.gray(`load config from ${CONFIG_PATH}`));
  if (!fs.existsSync(CONFIG_PATH)) {
    console.log(chalk.yellow('warning'), "config doesn't exist");
    fs.outputFileSync(CONFIG_PATH, '{}');
  }

  cache = fs.readJsonSync(CONFIG_PATH);
};

export const config = () => {
  if (cache == null) load();
  return cache;
};

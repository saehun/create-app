import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs-extra';

const CONFIG_PATH = path.join(os.homedir(), '.config', '.create-app.json');
let cache: Record<string, string> | null = null;

const load = () => {
  if (!fs.existsSync(CONFIG_PATH)) {
    fs.outputFileSync(CONFIG_PATH, '{}');
  }

  cache = fs.readJsonSync(CONFIG_PATH);
};

export const config = () => {
  if (cache == null) load();
  return cache;
};

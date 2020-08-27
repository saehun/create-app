import help from './help';
import { spawn, spawnSync } from 'child_process';
/**
 * this is main command router
 * implemented with zero dependencies
 */

const [, , command, ...args] = process.argv;

if (command === 'help' || command == null) {
  help();
  process.exit(0);
}

if (spawnSync('which', [`create-${command}`]).status) {
  console.log(`command not found: ${command}`);
  process.exit(1);
}

spawn(`create-${command}`, args, { stdio: 'inherit' });

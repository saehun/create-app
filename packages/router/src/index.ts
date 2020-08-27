import * as fs from 'fs';
import help from './help';
/**
 * this is main command router
 * implemented with zero dependencies
 */

const [, , command, ...args] = process.argv;

if (command === 'help' || command == null) {
  help();
  process.exit(0);
}

console.log('command', command);
console.log('args', args);

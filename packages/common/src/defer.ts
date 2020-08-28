import * as chalk from 'chalk';
const defered: Array<[() => Promise<void>, string]> = [];

export function defer(action: () => Promise<void>, message: string) {
  defered.push([action, message]);
}

process.on('uncaughtException', async function (error) {
  console.log(error);

  if (defered.length) {
    console.log(chalk.green('clean up garbages'));
  }

  while (defered.length) {
    const [action, message] = defered.pop()!;
    await action();
    console.log(chalk.gray(`- ${message}`));
  }

  process.exit(1);
});

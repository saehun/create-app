import * as chalk from 'chalk';
const defered: Array<[() => Promise<void>, string]> = [];

export function defer(action: () => Promise<void>, message: string) {
  defered.push([action, message]);
}

async function cleanUpGarbages(error: Error) {
  console.log(`\n\n\n`);
  console.log(error);

  if (defered.length) {
    console.log(chalk.yellowBright('\nclean up garbages'), '😔');
  }

  while (defered.length) {
    const [action, message] = defered.pop()!;
    await action();
    console.log(chalk.gray(`- ${message}`));
  }

  process.exit(1);
}

process.on('uncaughtException', cleanUpGarbages);
process.on('unhandledRejection', cleanUpGarbages);
/**
   
   const version = "1.0.0";
   const projectName = argv[2];
   const xxxx = await ask('...');

   context({
      version, projectName, xxxx
   })

   fromRoot.create(projectName),
   file('src/index.ts').fromText('...')
   file('package.json').fromRemote('...')
   

*/

/**
   fromRoot.git(),
   fromRoot.npm(),

   init.git();
   init.node();

 */

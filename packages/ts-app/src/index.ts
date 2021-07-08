import { config, context, file, fromRoot, greet, init } from 'common';
import { editorconfig, eslintrc, gitignore, license, prettierc, tsconfig } from 'template';
import { indexTestTs, packageJson } from './templates';
(async function () {
  const name = process.argv[2];
  if (name == null) {
    console.error(`specify project name`);
    process.exit(1);
  }

  // inject local config to context
  context(config());
  context.set('project-name', name);

  // create base directory
  fromRoot.create(name);

  await file('src/index.ts').fromText(`console.log("hello ${name}");`);
  await file('src/index.test.ts').fromText(indexTestTs);
  await file('package.json').fromText(packageJson);
  await file('.editorconfig').fromText(editorconfig);
  await file('.eslintrc.js').fromText(eslintrc.typescript);
  await file('.gitignore').fromText(gitignore.base);
  await file('.prettierrc').fromText(prettierc.base);
  await file('license').fromText(license.MIT);
  await file('tsconfig.json').fromText(tsconfig.simpleNode);

  init.yarn();
  init.git({ initialCommit: true });
  init.nextCommand(`cd ${name} && yarn start`);

  greet.happyHacking();
})();

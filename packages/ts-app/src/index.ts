import { init, fromRoot, file, greet, context, config } from 'common';
import { editorconfig, eslintignore, eslintrc, gitignore, jestConfig, license, prettierc, tsconfig } from 'template';
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
  await file('.eslintignore').fromText(eslintignore.base);
  await file('.eslintrc.js').fromText(eslintrc.typescript);
  await file('.gitignore').fromText(gitignore.base);
  await file('.prettierrc.json').fromText(prettierc.base);
  await file('license').fromText(license.MIT);
  await file('tsconfig.json').fromText(tsconfig.simpleNode);
  await file('jest.config.js').fromText(jestConfig.typescript);

  init.yarn();
  init.git({ initialCommit: true });
  init.nextCommand(`cd ${name} && yarn start`);

  greet.happyHacking();
})();

import { init, fromRoot, file, greet, context, config } from 'common';
import {
  packageJson,
  editorconfig,
  eslintignore,
  eslintrc,
  gitignore,
  jestConfig,
  license,
  prettierc,
  tsconfig,
  indexTestTs,
} from './templates';
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
  await file('.eslintignore').fromText(eslintignore);
  await file('.eslintrc.js').fromText(eslintrc);
  await file('.gitignore').fromText(gitignore);
  await file('.prettierrc.json').fromText(prettierc);
  await file('license').fromText(license);
  await file('tsconfig.json').fromText(tsconfig);
  await file('jest.config.js').fromText(jestConfig);

  init.yarn();
  init.git({ initialCommit: true });
  init.nextCommand(`cd ${name} && yarn start`);

  greet.happyHacking();
})();

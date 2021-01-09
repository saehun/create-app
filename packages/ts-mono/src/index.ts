import { init, fromRoot, file, greet, context, config } from 'common';
import { editorconfig, eslintignore, eslintrc, gitignore, jestConfig, license, prettierc, tsconfig } from 'template';
import { indexTestTs, lernaJson, packageJson, rootPackageJson } from './templates';
(async function () {
  const name = process.argv[2];
  if (name == null) {
    console.error(`specify project name`);
    process.exit(1);
  }

  const packageName = 'common';

  // inject local config to context
  context(config());
  context.set('project-name', name);
  context.set('package-name', packageName);

  // create base directory
  fromRoot.create(name);

  await file(`packages/${packageName}/src/index.ts`).fromText(`console.log("hello ${name}");`);
  await file(`packages/${packageName}/src/index.test.ts`).fromText(indexTestTs);
  await file(`packages/${packageName}/package.json`).fromText(packageJson);
  await file(`packages/${packageName}/jest.config.js`).fromText(jestConfig.typescript);
  await file(`packages/${packageName}/license`).fromText(license.MIT);
  await file('lerna.json').fromText(lernaJson);
  await file('package.json').fromText(rootPackageJson);
  await file('tsconfig.json').fromText(tsconfig.simpleNode);
  await file('.editorconfig').fromText(editorconfig);
  await file('.eslintignore').fromText(eslintignore.base);
  await file('.eslintrc.js').fromText(eslintrc.typescript);
  await file('.gitignore').fromText(gitignore.base);
  await file('.prettierrc.json').fromText(prettierc.base);

  init.yarn();
  init.git({ initialCommit: true });

  greet.happyHacking();
})();

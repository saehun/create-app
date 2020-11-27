import { init, fromRoot, file, greet, context, config } from 'common';
import {
  editorconfig,
  eslintignore,
  eslintrc,
  gitignore,
  jestConfig,
  license,
  prettierc,
  tsconfig,
  indexTest,
} from 'template';

const packageJson = `{
  "name": "{{project-name}}",
  "version": "1.0.0",
  "description": "",
  "license": "MIT",
  "main": "dist/index.js",
  "repository": "{{git-user-id}}/{{project-name}}",
  "scripts": {
    "test": "NODE_ENV=test jest",
    "lint": "eslint . --ext .js",
    "start": "node src/index.js",
    "start:debug": "node --inspect-brk src/index.js"
  },
  "author": {
    "name": "{{git-user-name}}",
    "email": "{{git-user-email}}"
  },
  "devDependencies": {
    "@types/jest": "^26.0.14",
    "eslint": "^7.9.0",
    "jest": "^26.4.2",
    "prettier": "^2.1.2"
  }
}`;

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

  await file('src/index.js').fromText(`console.log("hello ${name}");`);

  // get from gist
  await file('src/index.test.js').fromText(indexTest.pass);
  await file('package.json').fromGist(packageJson);
  await file('.editorconfig').fromText(editorconfig);
  await file('.eslintignore').fromGist(eslintignore.base);
  await file('.eslintrc.js').fromGist(eslintrc.javascript);
  await file('.gitignore').fromGist(gitignore.base);
  await file('.prettierrc.json').fromText(prettierc.base);
  await file('license').fromText(license.MIT);
  await file('tsconfig.json').fromGist(tsconfig.javascript);
  await file('jest.config.js').fromText(jestConfig.javascript);

  init.yarn();
  init.git({ initialCommit: true });
  init.nextCommand(`cd ${name} && yarn start`);

  greet.happyHacking();
})();

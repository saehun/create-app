import { init, fromRoot, file, greet, context, config } from 'common';
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
  await file('test/index.spec.js').fromGist({ id: '3d7c4185146c62997dfeab892da9acac', filename: 'index.spec.js' });
  await file('package.json').fromGist('3d7c4185146c62997dfeab892da9acac');
  await file('.editorconfig').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('.eslintignore').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('.eslintrc.js').fromGist('3d7c4185146c62997dfeab892da9acac');
  await file('.gitignore').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('.prettierrc.json').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('license').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('tsconfig.json').fromGist('3d7c4185146c62997dfeab892da9acac');

  init.yarn();
  init.git({ initialCommit: true });
  init.nextCommand(`cd ${name} && yarn start`);

  greet.happyHacking();
})();

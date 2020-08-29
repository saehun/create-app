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

  await file('src/index.ts').fromText(`console.log("hello ${name}");`);
  await file('package.json').fromGist({ id: '84cf4f084328f2044d26c3b849d0fada', filename: 'package.json-template-1' });
  await file('.editorconfig').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('.eslintignore').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('.eslintrc.js').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('.gitignore').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('.prettierrc.json').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('license').fromGist('15626a36577e771d8323565cab3e4c63');
  await file('tsconfig.json').fromGist('15626a36577e771d8323565cab3e4c63');

  init.yarn();
  init.git({ initialCommit: true });
  init.nextCommand(`cd ${name} && yarn start`);

  greet.happyHacking();
})();

import { init, fromRoot, file, greet, context, config } from 'common';
// prettier-ignore
const gistUrls = {
  'package.json': {id: "84cf4f084328f2044d26c3b849d0fada", filename: 'package.json-template-1' },
} as const;

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
  await file('package.json').fromGist(gistUrls['package.json']);

  init.yarn();
  init.git({ initialCommit: true });
  init.nextCommand(`cd ${name} && yarn start`);

  greet.happyHacking();
})();

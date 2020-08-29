import { init, fromRoot, file, greet, context, config } from 'common';
// prettier-ignore
const gistUrls = {
  'package.json': 'https://gist.githubusercontent.com/minidonut/84cf4f084328f2044d26c3b849d0fada/raw/f0503dde8b92d1d3c3ac060775523edb27685460/package.json-template-1',
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
  await file('package.json').fromRemote(gistUrls['package.json']);

  init.yarn();
  init.git({ initialCommit: true });
  init.nextCommand(`cd ${name} && yarn start`);

  greet.happyHacking();
})();

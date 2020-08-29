import { init, fromRoot, file, greet, context, config } from 'common';
// prettier-ignore
const gistUrls = {
  'package.json': 'https://gist.githubusercontent.com/minidonut/84cf4f084328f2044d26c3b849d0fada/raw/0318a4e86407250bf2a57a42be6bad835c43cb2b/package.json-template-1',
} as const;

(async function () {
  const name = process.argv[2];
  if (name == null) {
    console.error(`specify project name`);
    process.exit(1);
  }

  // inject local config to context
  context(config());

  // create base directory
  fromRoot.create(name);

  file('src/index.ts').fromText(`console.log("hello ${name}");`);
  file('package.json').fromRemote(gistUrls['package.json']);

  init.yarn();
  init.git({ initialCommit: true });
  init.nextCommand('yarn start');

  greet.happyHacking();
})();

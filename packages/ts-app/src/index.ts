import { mkdir } from 'common';
(function () {
  const name = process.argv[2];
  if (name == null) {
    console.error(`specify project name`);
    process.exit(1);
  }

  mkdir('src/template');
})();

export const rootPackageJson = `{
  "name": "{{project-name}}",
  "private": true,
  "description": "",
  "license": "MIT",
  "repository": "{{git-user-id}}/{{project-name}}",
  "author": {
    "name": "{{git-user-name}}",
    "email": "{{git-user-email}}"
  },
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "@types/jest": "^26.0.20",
    "@types/node": "^14.14.31",
    "@typescript-eslint/eslint-plugin": "^4.15.2",
    "@typescript-eslint/parser": "^4.15.2",
    "eslint": "^7.20.0",
    "jest": "^26.6.3",
    "prettier": "^2.2.1",
    "ts-jest": "^26.5.2",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.2"
    "lerna": "^3.22.1"
  }
}`;

export const packageJson = `{
  "name": "{{package-name}}",
  "version": "1.0.0",
  "description": "",
  "license": "MIT",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "repository": {
    "type": "git",
    "url": "https://github.com/{{git-user-id}}/{{project-name}}",
    "directory": "packages/{{package-name}}"
  },
  "scripts": {
    "build": "tsc",
    "test": "NODE_ENV=test jest",
    "lint": "eslint . --ext .js,.ts",
    "start": "ts-node src/index.ts",
    "test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand",
    "start:debug": "node --require ts-node/register --inspect-brk src/index.ts"
  },
  "files": [
    "license",
    "package.json",
    "dist/"
  ]
}`;

export const lernaJson = `{
  "packages": ["packages/*"],
  "version": "independent",
  "useWorkspaces": true,
  "npmClient": "yarn"
}`;

export const indexTestTs = `test('pass', () => {
  expect(true).toBeTruthy();
});`;

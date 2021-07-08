export const packageJson = `{
  "name": "{{project-name}}",
  "version": "1.0.0",
  "description": "",
  "license": "MIT",
  "main": "dist/index.js",
  "repository": "{{git-user-id}}/{{project-name}}",
  "scripts": {
    "build": "tsc",
    "test": "NODE_ENV=test jest",
    "lint": "eslint . --ext .js,.ts",
    "start": "ts-node src/index.ts",
    "test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand",
    "start:debug": "node --require ts-node/register --inspect-brk src/index.ts"
  },
  "author": {
    "name": "{{git-user-name}}",
    "email": "{{git-user-email}}"
  },
  "devDependencies": {
    "@types/jest": "^26.0.24",
    "@types/node": "^16.0.1",
    "@typescript-eslint/eslint-plugin": "^4.28.2",
    "@typescript-eslint/parser": "^4.28.2",
    "eslint": "^7.30.0",
    "jest": "^27.0.6",
    "prettier": "^2.3.2",
    "ts-jest": "^27.0.3",
    "ts-node": "^10.0.0",
    "typescript": "^4.3.5"
  },
  "eslintIgnore": [
    "*.js",
    "dist"
  ],
  "jest": {
    "collectCoverage": true,
    "coverageDirectory": "./coverage/",
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "testMatch": [
      "**/*.test.(ts|js)"
    ],
    "transform": {
      "^.+.(ts|tsx)$": "ts-jest"
    },
    "testEnvironment": "node",
    "preset": "ts-jest"
  }
}`;

export const indexTestTs = `test('pass', () => {
  expect(true).toBeTruthy();
});`;

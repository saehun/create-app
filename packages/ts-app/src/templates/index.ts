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
    "start:debug": "node --require ts-node/register --inspect-brk src/index.ts"
  },
  "author": {
    "name": "{{git-user-name}}",
    "email": "{{git-user-email}}"
  },
  "devDependencies": {
    "@types/jest": "^26.0.15",
    "@types/node": "^14.14.10",
    "@typescript-eslint/eslint-plugin": "^4.8.2",
    "@typescript-eslint/parser": "^4.8.2",
    "eslint": "^7.14.0",
    "jest": "^26.6.3",
    "prettier": "^2.2.0",
    "ts-jest": "^26.4.4",
    "ts-node": "^9.0.0",
    "typescript": "^4.1.2"
  }
}`;

export const editorconfig = `root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true`;

export const eslintignore = `node_modules
dist
jest.config.js
package.json`;

export const eslintrc = `module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    // disable rules below
    indent: 0,
    quotes: 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0, // allow require
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-function-return-type': ['error'],
  },
};`;

export const gitignore = `# Dependency directory
node_modules

# Ignore coverage
coverage

# Ignore built ts files
dist

# Ignore Desktop Service Store
.DS_Store

# Use yarn
package-lock.json

# Ignore yarn error log
yarn-error.log`;

export const prettierc = `{
  "bracketSpacing": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "avoid",
  "printWidth": 120,
  "useTabs": false,
  "tabWidth": 2,
  "proseWrap": "never"
}`;

export const jestConfig = `module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/*.test.(ts|js)',
  ],
  testEnvironment: 'node',
  preset: 'ts-jest',
};`;

export const license = `MIT License

Copyright (c) 2020 {{git-user-name}}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export const tsconfig = `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "strictNullChecks": true,
    "sourceMap": false,
    "outDir": "dist",
    "declaration": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [ "dom", "esnext" ]
  },
  "include": [
    "src/**/*"
  ]
}`;

export const indexTestTs = `test('pass', () => {
  expect(true).toBeTruthy();
});`;

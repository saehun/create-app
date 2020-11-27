const typescript = `module.exports = {
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

const javascript = `module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  moduleFileExtensions: [
    'js',
    'json',
  ],
  testMatch: [
    '**/*.test.js',
  ],
  testEnvironment: 'node',
};`;

export const jestConfig = {
  typescript,
  javascript,
};

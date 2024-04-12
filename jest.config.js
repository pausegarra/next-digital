// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: ["**/test/**/*.ts",],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

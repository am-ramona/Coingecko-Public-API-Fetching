/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  preset: 'ts-jest',
  transform: {
    // "^.+.tsx?$": ["ts-jest",{}],
    '^.+\\.(ts|tsx)?$': ['ts-jest', {}]
  },
};
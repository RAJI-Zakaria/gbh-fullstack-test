/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    // there was an issue when fetching the json file outside the app folder so I had to add this
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

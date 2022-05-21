const jestConfig = {
  verbose: true,
  testURL: "http://localhost/",
  'transform': {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/*.js?(x)'],
}

module.exports = jestConfig
module.exports = {
  moduleNameMapper: {
    '\\.([scss|css]+)(?:[?#]|$)': '<rootDir>/__mocks__/styleMocks.js',
    '\\.(jpg|jpeg|png|gif|eot|webp|svg|ttf|woff|woff2|mp4|webm|mp3|m4a|aac|oga)$':
      '<rootDir?/__mocks/fileMock.js'
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/coverage',
    '<rootDir>/jest.config.js',
    '<rootDir>/next.config.js',
    '<rootDir>/server.js',
    '<rootDir>/pages'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/coverage',
    '<rootDir>/jest.config.js',
    '<rootDir>/next.config.js',
    '<rootDir>/server.js'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  coverageReporters: [
    'text',
    'json',
    'lcov',
    'json-summary',
    'text-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 47,
      lines: 50,
      statements: 50
    }
  }
};

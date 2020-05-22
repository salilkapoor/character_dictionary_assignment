module.exports = {
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
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  }
};

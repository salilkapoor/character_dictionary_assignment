module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/', '/jest.config.js/', '/next.config.js/', '/server.js/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  coverageReporters: ['text', 'json', 'lcov', 'json-summary', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 3,
      lines: 3,
      statements: 0.7
    }
  }
};

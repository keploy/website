module.exports = {
    collectCoverage: true,
    // on node 14.x coverage provider v8 offers good speed and more or less good report
    coverageProvider: 'v8',
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!/Users/gouravkumar/Desktop/Keploy/website/out/**',
      '!/Users/gouravkumar/Desktop/Keploy/website/.next/**',
      '!/Users/gouravkumar/Desktop/Keploy/website/*.config.js',
      '!/Users/gouravkumar/Desktop/Keploy/website/coverage/**',
    ],
    moduleNameMapper: {
      // Handle CSS imports (with CSS modules)
      // https://jestjs.io/docs/webpack#mocking-css-modules
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
   
      // Handle CSS imports (without CSS modules)
      '^.+\\.(css|sass|scss)$': '/Users/gouravkumar/Desktop/Keploy/website/__mocks__/styleMock.js',
   
      // Handle image imports
      // https://jestjs.io/docs/webpack#handling-static-assets
      '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': `/Users/gouravkumar/Desktop/Keploy/website/__mocks__/fileMock.js`,
   
      // Handle module aliases
      '^@/components/(.*)$': '/Users/gouravkumar/Desktop/Keploy/website/components/$1',
   
      // Handle @next/font
      '@next/font/(.*)': `/Users/gouravkumar/Desktop/Keploy/website/__mocks__/nextFontMock.js`,
      // Handle next/font
      'next/font/(.*)': `/Users/gouravkumar/Desktop/Keploy/website/__mocks__/nextFontMock.js`,
      // Disable server-only
      'server-only': `/Users/gouravkumar/Desktop/Keploy/website/__mocks__/empty.js`,
    },
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['/Users/gouravkumar/Desktop/Keploy/website/jest.setup.ts'],
    testPathIgnorePatterns: ['/Users/gouravkumar/Desktop/Keploy/website/node_modules/', '/Users/gouravkumar/Desktop/Keploy/website/.next/'],
    testEnvironment: 'jsdom',
    transform: {
      // Use babel-jest to transpile tests with the next/babel preset
      // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env','next/babel'] }],
    },
    transformIgnorePatterns: [
      'node_modules/(?!(gsap)/)', // Allow GSAP to be transformed
      '^.+\\.module\\.(css|sass|scss)$', // Keep ignoring CSS module transformations
    ],
  }
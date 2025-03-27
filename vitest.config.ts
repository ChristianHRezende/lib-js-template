import { defineConfig } from 'vitest/config'

const minCoverage = 50

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        lines: minCoverage,
        functions: minCoverage,
        branches: minCoverage,
        statements: minCoverage
      },
      exclude: [
        '**/index.ts',
        '**/*.d.ts',
        '**/__mocks__/**'
      ]
    }
  }
})
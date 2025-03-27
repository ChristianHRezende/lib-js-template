import { defineConfig } from 'vitest/config'

const minCoverage = 0

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        functions: minCoverage,
        branches: minCoverage,
      },
      exclude: [
        '**/index.ts',
        '**/*.d.ts',
        '**/__mocks__/**'
      ]
    }
  }
})
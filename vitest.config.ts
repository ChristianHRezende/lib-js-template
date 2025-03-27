import { defineConfig } from 'vitest/config'

const minCoverage = 0

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        functions: minCoverage,
        branches: minCoverage,
      },
      include: ['src/**/*.test.ts'],
      exclude: [
        '**/index.ts',
        '**/*.d.ts',
        '**/__mocks__/**',
        '**/__stubs__/**',
      ]
    }
  }
})
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ib4519',
  viewportWidth: 1000,
  viewportHeight: 600,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
  }
});

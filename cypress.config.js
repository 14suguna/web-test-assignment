const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const preprocessor = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config); // Adds Cucumber plugin

      const bundler = createBundler({ plugins: [preprocessor.default(config)] });
      on("file:preprocessor", bundler); // Ensures correct preprocessor setup

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // Location of feature files
    watchForFileChanges: false,
    includeShadowDom: true,
    experimentalSessionAndOrigin: true,
    baseUrl: "https://www.reddit.com",
    defaultCommandTimeout: 10000,
    retries: 0,
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
  },
});

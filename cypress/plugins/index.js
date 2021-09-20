/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { log } = require('console');
const path = require('path');
const extensionLoader = require('cypress-browser-extension-plugin/loader');
/**
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    // launchOptions.extensions.push(path.resolve(__dirname, "../../../../MetaMask"))
    // launchOptions.extensions.push('D:/WORKING AREA/Learning Cypress/CypressAutomation/cypress/MetaMask')
    // return launchOptions
    // on('before:browser:launch', extensionLoader.load('D:/WORKING AREA/Learning Cypress/CypressAutomation/cypress/MetaMask'))
  })
  // D:\WORKING AREA\Learning Cypress\CypressAutomation\cypress
  }
// module.exports = (on) => {
//   on('before:browser:launch', extensionLoader.load('/path/to/your/extension'));
// }
 
// // cypress/support/command.js
// const addExtensionCommands = require('cypress-browser-extension-plugin/commands');
// addExtensionCommands(Cypress);
 
// // cypress/integration/my_spec.js or cypress/support/index.js
// beforeEach(() => {
//   cy.clearExtensionStorage('local');
// });
import { defineConfig } from "cypress";
 
export default defineConfig({
  e2e: {
    // URL da aplicação da prova
    baseUrl: 'https://www.saucedemo.com/v1/',
 
    setupNodeEvents(on, config) {
  
    },
  },
});
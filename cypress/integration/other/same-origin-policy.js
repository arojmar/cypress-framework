/// <reference types="Cypress" />

describe("Cypress web security", () =>{
    it("Validate visiting two different domains", () => {
        //This will fail
        cy.visit('https://webdriveruniversity.com/');
        cy.visit('https://automationteststore.com');
    });

    it("Validate visiting two different domains via user actions", () => {
        // Disabling the security "chromeWebSecurity" : false
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });

})
/// <reference types="Cypress" />

describe("Test Contact Us Form via WebdriverUni website", () =>{
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.url().should('include', 'contactus');
        cy.fixture('example').then(function(data) {
            // this.data = data;
             globalThis.data = data;
        })
    });

    it("Should be able to submit a successful submission via Contact Us Form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type("Muchas gracias por su tiempo");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via Contact Us Form as all fields are required", () => {
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type("Muchas gracias por su tiempo");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });

})
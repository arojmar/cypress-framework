import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO';
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO';

/// <reference types="Cypress" />

describe("Test Contact Us Form via WebdriverUni website", () =>{
    before(() => {
        cy.fixture('example').then(function(data) {
            // this.data = data;
             globalThis.data = data;
        })
    });

    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");
        // cy.visit("https://webdriveruniversity.com/");
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
    });

    it("Should be able to submit a successful submission via Contact Us Form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type("Muchas gracias por su tiempo");
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', 'Thank You for your Message!');
        let message = 'Thank You for your Message!'
        cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.body, 'h1', message)
    });

    it("Should not be able to submit a successful submission via Contact Us Form as all fields are required", () => {
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type("Muchas gracias por su tiempo");
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error: all fields are required');
        let message = 'Error: Invalid email address';
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", data.body, 'body', message);
    });

})
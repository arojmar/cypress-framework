import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO';
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO';

/// <reference types="Cypress" />

describe("Test Contact Us Form via WebdriverUni website", () => {
    Cypress.config('defaultCommandTimeout', 20000);
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(() => {
        cy.fixture('example').then(function(data) {
             globalThis.data = data;
        })
    });

    beforeEach(() => {
        homepage_PO.visitHomepage();
        // cy.wait(3000);
        homepage_PO.clickOn_ContactUs_Button();
        // cy.pause();
    });

    it("Should be able to submit a successful submission via Contact Us Form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        let message = 'Thank You for your Message!'
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.body, 'h1', message);
    });

    it("Should not be able to submit a successful submission via Contact Us Form as all fields are required", () => {
        let message = 'Error: Invalid email address';
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", data.body, 'body', message);
    });

})
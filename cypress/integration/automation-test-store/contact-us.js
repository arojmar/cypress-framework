/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(() => {
        cy.fixture("userDetails").as("user");
    })

    it("Should be able to submit a sucessful submission Contact Us Form", {
        retries : {
            runMode : 2,
            openMode : 2
        }
    }, ()=>{
        cy.visit("https://automationteststore.com");
        cy.get("a[href$='contact']55").click().then(function(itemNameLink){
            cy.log("The name of the link is: " + itemNameLink.text());
        });
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Thanks for your time");
        cy.get("button[title='Submit']").click();
        // cy.contains('Submit').click();
        cy.get(".mb40 > :nth-child(3)").should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log('Tets has completed!')
    })
})
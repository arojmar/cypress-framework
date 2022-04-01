/// <reference types="Cypress" />

describe("Verifying variables, cypress commnads and jquery commands", () => {
    it("Navigating to specific product pages", ()=>{
        cy.visit("https://automationteststore.com");
        
        // This will fails
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();

        // This will be passs
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // skincareLink.click();

        // Recomended approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    });

    it("Navigating to specific product pages", ()=>{
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        // Folowing code will fail
        // const header = cy.get("hi .maintext");
        // cy.log(header.text());

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq("Makeup");
        })

    });

    it.only("Validate properties of the contact us page", ()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
       

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:');

        //JQeury approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name:');
        
            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })

        })
        
        
        //Embedded commands (Closure)


    });

})
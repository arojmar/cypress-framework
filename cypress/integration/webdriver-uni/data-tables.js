/// <reference types="Cypress" />
describe("Handling data via webdriver uin", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("Calculate and assert the total age of all users", () => {
        
        var userDetails = [];
        cy.get('#thumbnail-1 td').each(($el, index, $list) =>{
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for(i = 1; i < userDetails.length; i++){
                cy.log(userDetails[i]);
            }
        })


      });

});

  
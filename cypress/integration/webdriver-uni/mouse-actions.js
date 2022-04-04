/// <reference types="Cypress" />

describe("Test mouse actions", () =>{
    it("Scroll elements into view", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true});

    });

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true});

        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
    });
    
    it("I should be able to perform a doble click in a item", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true});

        cy.get('#double-click').dblclick();
        // cy.get('#double-click').trigger('dblclick');
    });

    it("I should be able to hold down the left mouse click button on a given item", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true});

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
        })
    });
})
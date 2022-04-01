/// <reference types="Cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.greaterThan', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com");
        cy.get(".thumbnail").as('thumbnail');

        // My solution
        cy.get("@thumbnail").its('length').should('be.at.least', 16)
        cy.get('.productcart').invoke('attr', 'title').should('eq', 'Add to Cart')

        // The course solution
        cy.get(".thumbnail").as('productThumbnail');
        cy.get("@productThumbnail").should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('eq', 'Add to Cart')
    });

    it("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com");
        cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i]);
                itemsPriceTotal += Number(itemPrice[i]);
            }
            itemsTotal += itemsPriceTotal;
            cy.log('Non sale price items total: ' + itemsPriceTotal)
        })
        cy.get('@saleItemPrice').then($linkText => {
            var itemsSalePriceTotal = 0;
            var itemSalePrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemSalePrice.length; i++){
                cy.log(itemSalePrice[i]);
                itemsSalePriceTotal += Number(itemSalePrice[i]);
            }
            itemsTotal += itemsSalePriceTotal;
            cy.log('Sale price items total: ' + itemsSalePriceTotal)
        })
        .then(() => {
            cy.log('Total price of all products: ' + itemsTotal)
            expect(itemsTotal).to.equal(648.5);
        })
        
    });
});
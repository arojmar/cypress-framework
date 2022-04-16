class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        data.productName.forEach(function(element) {
            cy.addProductToBasket(element);
        })
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
    }

}

export default AutoStore_HairCare_PO;
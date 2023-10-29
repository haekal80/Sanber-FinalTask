export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    sauceLabsBackpackAddToCart(){
        cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
    }

    assertCartItem(){
        cy.get('[class="shopping_cart_badge"').contains('1')
    }
    
    moveToCartPage(){
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[id="checkout"').should('be.visible')
    }
}
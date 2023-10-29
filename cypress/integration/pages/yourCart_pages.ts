export class YourCartPage{

    removeItemBackpack(){
        cy.get('[id="remove-sauce-labs-backpack"]').click()
    }

    assertItemBackpack(){
        cy.get('[id="remove-sauce-labs-backpack"]').should('not.exist') 
    }
}
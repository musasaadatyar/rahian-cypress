
let locator = require('../../projectLocator/projectLocator')

export class ClickMenuBtn {
    clickPlanningButton(){
        cy.get(locator.MENU_BTN.PLANNING)
            .should('be.visible').click()
        cy.get(locator.GLOBAL_LOCATOR.H4).contains('برنامه ریزی').should('have.text','برنامه ریزی')
    }
}
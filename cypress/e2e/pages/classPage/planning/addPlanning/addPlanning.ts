let locator = require('../../../projectLocator/projectLocator')

export class AddPlanning {
    enterTitle(title: string) {
        return cy.get(locator.PLANING_PAGE.ADD.TITLE).should('be.visible').clear().type(title)
    }
}
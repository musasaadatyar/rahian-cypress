/// <reference types="cypress" />
import {CoreClass} from "../e2e/pages/classPage/core/CoreClass";

let coreClass = new CoreClass()
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


Cypress.Commands.add('login', (nationalCode: number, password?: string) => {
    return coreClass.loginPage(nationalCode, password)
})
Cypress.Commands.add('logOut', () => {
        return coreClass.logOut()
    }
)
Cypress.Commands.add('search', () => {
    return coreClass.searchClick()
})
Cypress.Commands.add('add', () => {
    return coreClass.addClick()
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })


Cypress.Commands.add('getText', {prevSubject: 'element'}, ($el) => {
    return cy.wrap($el).invoke('text')
})


// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//


declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * enter to the website rahian noor
             @param {number} nationalCode - you must enter nationalCode user
             @param {string} password - you must enter password user
             @example:
              cy.login(0820226122, 1q2w3E**)
             */
            login(nationalCode: number, password?: string): Chainable<any>

            /**
             * @param element
             * @example:
             * cy.get('h1').getText()
             */
            getText(element: Element): Chainable<Element>

            /** log out project
             * @example:
             * cy.logOut()
             */
            logOut(): Chainable<any>

            /**click on search btn
             * example:
             * cy.search()
             */
            search(): Chainable<any>

            /**click on add btn
             * example:
             * cy.add()
             */
            add(): Chainable<any>

        }
    }
}
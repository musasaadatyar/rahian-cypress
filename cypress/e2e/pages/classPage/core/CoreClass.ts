import {LoginPage} from "../login/loginPage/loginPage";

let locator = require('../../projectLocator/projectLocator')
let login = new LoginPage()

export class CoreClass {
    loginPage(nationalCode: number, password?: string) {
        let passwordUser: string = password ? password : '1q2w3E*';
        login.openLoginPage()
        login.clickOnVaGf()
        login.clickOnEnterLoginPageButton()
        login.enterNationalCode(nationalCode)
        login.enterPassword(passwordUser)
        login.clickEnterButton()
        login.assertSuccessfulLogin()
    }

    logOut() {
        cy.get(locator.HEADER_PROJECT.PROFILE_USER)
            .should('be.visible')
            .click()
            .contains('خروج')
            .should('be.visible')
            .click()
    }

    searchClick() {
        cy.get(locator.GLOBAL_LOCATOR.SEARCH_BTN).should('exist').click()
    }

    addClick() {
        cy.get(locator.GLOBAL_LOCATOR.ADD_BTN).should('exist').click()
    }

}
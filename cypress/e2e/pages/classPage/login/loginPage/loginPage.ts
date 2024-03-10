let locator = require('../../../projectLocator/projectLocator')
let url = require('../../../projectLocator/projectUrl')
export class LoginPage {
    openLoginPage() {
        cy.visit(url.URL_ENTER_PROJECT.DEVELOP_URL)
        cy.url().should('include', '/landing')
        return this
    }

    clickOnVaGf() {
        return cy.get(locator.LOGIN_PAGE.CONSECRATION_CIRCLE_BUTTON)
            .eq(3)
            .should('be.visible')
            .click()
    }

    clickOnEnterLoginPageButton() {
        return cy.get(locator.GLOBAL_LOCATOR.BUTTON)
            .contains('ورود')
            .should('be.visible')
            .click()
    }

    enterNationalCode(nationalCode: number) {
        return cy.get(locator.LOGIN_PAGE.NATIONAL_CODE_INPUT)
            .should('be.visible')
            .clear().type(
                nationalCode.toString()
            )
    }

    enterPassword(password: string) {
        return cy.get(locator.LOGIN_PAGE.PASSWORD_INPUT)
            .should('be.visible')
            .clear().type(
                password
            )
    }

    checkRememberMeBox() {
        return cy.get(locator.LOGIN_PAGE.REMEMBER_ME_CHECK_BOX)
            .should('be.visible').click()
    }

    clickForgetPassword() {
        return cy.get(locator.LOGIN_PAGE.FORGET_PASSWORD)
            .should('be.visible')
            .click()
    }

    clickEnterButton() {
        return cy.get(locator.LOGIN_PAGE.ENTER_BUTTON)
            .should('be.visible')
            .click()
    }

    assertSuccessfulLogin(){
        cy.get(locator.LOGO_PROJECT.LOGO).should('be.visible').should('have.text','راهیان نور')
    }
    loginPage(nationalCode: number, password?: string) {
        let passwordUser: string = password ? password : '1q2w3E*';

        this.openLoginPage()
        this.clickOnVaGf()
        this.clickOnEnterLoginPageButton()
        this.enterNationalCode(nationalCode)
        this.enterPassword(passwordUser)
        this.clickEnterButton()
        this.assertSuccessfulLogin()
    }
}
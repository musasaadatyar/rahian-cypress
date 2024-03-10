import {LoginPage} from "../../classPage/login/loginPage/loginPage";
import {DataBseFunctions, TDataCreateTable} from "../../dataBaseclass/database";

let login = new LoginPage();
let databaseFunction = new DataBseFunctions()

describe('test test', () => {
    before(() => {
        cy.get('body');
        cy.viewport(window.screen.width, window.screen.height);
    })

    it('should ', () => {
        cy.login(1111111111)
    });
})


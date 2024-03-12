import {ClickMenuBtn} from "../../classPage/clickMenu/clickMenuBtn";
import {PlanningGrid} from "../../classPage/planning/planningGrid";

let urlLocator = require('../../projectLocator/projectUrl')

let clickMenuBtn = new ClickMenuBtn();
let planning = new PlanningGrid()
describe('planning', () => {
    before(() => {
        cy.get('body');
        cy.viewport(window.screen.width, window.screen.height);
    })


    it('userEnterPlanning', () => {
        cy.login(9345721983)
    });

    it('enter planning page', () => {
        clickMenuBtn.clickPlanningButton()
        planning.infinityPlanningPage()

    });
});
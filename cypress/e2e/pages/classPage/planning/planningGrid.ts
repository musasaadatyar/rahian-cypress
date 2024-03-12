let locator = require('../../projectLocator/projectLocator')
let url = require('../../projectLocator/projectUrl')

export class PlanningGrid {

    infinityPlanningPage() {
        cy.get(locator.GLOBAL_LOCATOR.P).contains('در این قسمت می توانید اطلاعات مربوط به برنامه ریزی را مشاهده نمایید').should('be.visible')
        // cy.request(`${url.URL_ENTER_PROJECT.DEVELOP_URL}/api/identity/organization-units/organizationUnitRolesUser`,{headers:{
        //
        //     }}).then((res: any) => {
        //     our = res.status
        //     expect(res.id)
        //     console.log('our3',res.id)
        //        console.log('our2',expect(res))
        // })
    }
}
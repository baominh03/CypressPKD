/// <reference types="Cypress" />



export class WebElementSupport {

    waitToBeDisplayed(strElement) {
        let result = false
            try {
                cy.get(strElement, { timeout: 10000 })
                result = true
            } catch (e) {
                result = false
            }
            return result

        // })
        // } catch (AssertionError) {
        //     return false
        // }
        // return true

    }

    waitToBeExist(strElement) {
        try {
            return cy.get(strElement).should('exist')
        } catch (e) {
            return false
        }
    }

    waitToBeNotExist(strElement) {
        try {
            return cy.get(strElement).should('not.exist')
        } catch (e) {
            return false
        }
    }

    getElement(strElement) {
        return cy.get(strElement)
    }


}
export const webElementSupport = new WebElementSupport()
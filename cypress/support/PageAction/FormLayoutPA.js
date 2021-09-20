/// <reference types="Cypress" />
import { formLayoutPO } from "../PageObject/FormLayoutPO"


export class FormLayoutPA {

    inputEmailPassOnUsingGrid() {
        cy.fixture('FormLayout').then((formLayout) => {
            // pass = 'Password' + (Math.floor((Math.random() * 10000) + 1))
            formLayoutPO.getElementEmailOnUsingGrid().type(formLayout.email)
            cy.log('Input email on Using Grid: ' + formLayout.email)
            formLayoutPO.getElementPassOnUsingGrid().type(formLayout.password)
            cy.log('Input Pass on Using Grid: ' + formLayout.password)
        })
    }

    hitSignInButtonOnUsingGrid() {
        formLayoutPO.getElementSignInButtonOnUsingGrid().click()
        cy.log('Clicked Sign In button on Using Grid')
    }

}

export const formLayoutPA = new FormLayoutPA()


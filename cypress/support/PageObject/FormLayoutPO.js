/// <reference types="Cypress" />

export class FormLayoutPO {
    getElementEmailOnUsingGrid() {
        return cy.get('nb-card-body').find('#inputEmail1')
    }

    getElementPassOnUsingGrid() {
        return cy.get('nb-card-body', { timeout: 10000}).find('#inputPassword2')
    }

    getElementSignInButtonOnUsingGrid() {
        return cy.get('nb-card-body').find('.appearance-filled').contains('Sign in')
    }


}

export const formLayoutPO = new FormLayoutPO()
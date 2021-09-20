/// <reference types="Cypress" />

export class LoginPO {
    getElementPasswordField() {
        return cy.get('[type="password"]', { timeout: 20000 })
    }

    getElementSubmitButton() {
        return cy.get('.login_content--button')
    }

    getElementLoginSucceed() {
        return cy.get('.incubator_character', { timeout: 10000 })
    }


}

export const loginPO = new LoginPO()
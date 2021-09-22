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

    getElementLoginWithScholarMode() {
        return cy.get('.action__scholarship', { timeout: 30000 })
    }

    getElementLoginWithWalletMode() {
        return cy.get('.action__wallet', { timeout: 10000 })
    }

    getElementLoginSucceedWithScholarMode() {
        return cy.get('.require-message', { timeout: 10000 })
    }

    getElementUserField() {
        return cy.get('[type="text"]', { timeout: 10000 })
    }

}

export const loginPO = new LoginPO()
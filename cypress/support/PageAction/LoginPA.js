/// <reference types="Cypress" />
import { loginPO } from "../PageObject/LoginPO"


export class LoginPA {

    visitPetKingDom() {
        cy.visit('https://dapp.petkingdom.io/')
        cy.log('Go to PET KING DOM')
        cy.log('Wait to Manualy input MetaMask password')
    }

    loginPKDWalletMode(password) {
        loginPO.getElementLoginWithWalletMode().should('be.visible').click().then(() => {
            loginPO.getElementPasswordField().should('be.visible').then(() => {
                loginPO.getElementPasswordField().type(password, { log: false })
                loginPO.getElementSubmitButton().click()
            })
        })
    }

    loginPKDScholarMode(email, password) {
        loginPO.getElementLoginWithScholarMode().should('be.visible').click().then(() => {
            loginPO.getElementPasswordField().should('be.visible', { timeout: 20000}).then(() => {
                loginPO.getElementUserField().type(email, { log: false })
                loginPO.getElementPasswordField().type(password, { log: false })
                loginPO.getElementSubmitButton().click()
            })
        })
    }


}

export const loginPA = new LoginPA()
/// <reference types="Cypress" />
import { loginPO } from "../PageObject/LoginPO"


export class LoginPA {

    visitPetKingDom() {
        cy.visit('https://dapp.petkingdom.io/')
        cy.log('Go to PET KING DOM')
        cy.log('Wait to Manualy input MetaMask password')
    }

    loginPKD() {
        cy.fixture('petkingdom').then((petkingdom) => {
            loginPO.getElementPasswordField().should('be.visible').then(() => {
                loginPO.getElementPasswordField().type(petkingdom.password)
                loginPO.getElementSubmitButton().click()
            })
        })

    }


}

export const loginPA = new LoginPA()
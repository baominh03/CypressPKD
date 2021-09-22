/// <reference types="Cypress" />

export class MetaMaskPO {

    getElementMetamaskPassword() {
        return cy.get('[type="password"]')
    }

    getElementMetamaskUnblockButton() {
        return cy.get('.MuiButton-label')
    }

    getElementPKDUrl() {
        return cy.get('.login_container--title')
    }



}

export const metaMaskPO = new MetaMaskPO()
/// <reference types="Cypress" />
import { MetaMaskPO, metaMaskPO } from "../PageObject/MetamaskPO"


export class MetamaskPA {

    visitMetamask() {
        // cy.visit('moz-extension://07f9a68b-4974-4514-ade7-80fb258e9176/home.html#initialize/welcome')
        cy.visit('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en')
        cy.log('Go to MetaMask')
    }

    loginMetaMask() {
        // this.visitMetamask()
        cy.wait(5)
        metaMaskPO.getElementPKDUrl().type('Baobao@2709', { force: true }).type('{enter}')     
    }


}

export const metamaskPA = new MetamaskPA()
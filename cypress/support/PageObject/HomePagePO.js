/// <reference types="Cypress" />

export class HomePagePO {

    getElementFoodStoreMenu() {
        return cy.get('.app__content .sidebar .sidebar__menu [href="/food-store"]', { timeout: 10000 })
    }

    getElementBattleFieldMenu() {
        return cy.get('.app__content .sidebar .sidebar__menu [href="/battlefield"]', { timeout: 10000 })
    }

    getElementHeroInfo() {
        return cy.get('.hero-info__text', { timeout: 10000 })
    }

    getElementWorldSelection() {
        return cy.get('.ld-header__icon ', { timeout: 10000 })
    }

}

export const homePagePO = new HomePagePO()
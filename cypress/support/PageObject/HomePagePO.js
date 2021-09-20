/// <reference types="Cypress" />

export class HomePagePO {

    getElementFoodStoreMenu() {
        return cy.get('.app__content .sidebar .sidebar__menu [href="/food-store"]')
    }

}

export const homePagePO = new HomePagePO()
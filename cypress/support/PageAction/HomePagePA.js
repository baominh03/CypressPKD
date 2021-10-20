/// <reference types="Cypress" />
import { homePagePO } from "../PageObject/HomePagePO"
import { loginPO } from "../PageObject/LoginPO"
import { foodStorePO } from "../PageObject/FoodStorePO"


export class HomePagePA {

    selectFoodStore() {
        homePagePO.getElementHeroInfo().should('be.visible', { timeout: 20000 }).then(() => {
            homePagePO.getElementFoodStoreMenu().trigger('mouseover').click()
        })
    }

    selectFoodStoreDirectly() {
        homePagePO.getElementFoodStoreMenu().trigger('mouseover').click()

    }

    selectBattleField() {
        homePagePO.getElementBattleFieldMenu().trigger('mouseover').click()
    }

    selectWorld(world) {
        let index
        switch (world) {
            case 'earth':
                index = 0
                break;
            case 'mars':
                index = 1
                break;
            case 'mercury':
                index = 2
                break;
            case 'venus':
                index = 3
                break;
            case 'jupiter':
                index = 4
                break;
            case 'sun':
                index = 5
                break;
            default:
                index = 0
        }
        cy.wait(5000).then(() => {
            homePagePO.getElementWorldSelection().eq(index).click()
        })

    }

}

export const homePagePA = new HomePagePA()
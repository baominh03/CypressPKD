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

}

export const homePagePA = new HomePagePA()
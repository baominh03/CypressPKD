/// <reference types="Cypress" />
import { homePagePO } from "../PageObject/HomePagePO"
import { loginPO } from "../PageObject/LoginPO"
import { foodStorePO } from "../PageObject/FoodStorePO"


export class HomePagePA {

    selectFoodStore() {
        loginPO.getElementLoginSucceed().should('be.visible').then(() => {
            homePagePO.getElementFoodStoreMenu().trigger('mouseover').click()
        })
    }

}

export const homePagePA = new HomePagePA()
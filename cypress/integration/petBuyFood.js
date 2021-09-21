/// <reference types="Cypress" />
import { loginPA } from "../support/PageAction/LoginPA"
import { homePagePA } from "../support/PageAction/HomePagePA"
import { foodStorePA } from "../support/PageAction/FoodStorePA"


describe('Second suite: Buy Food Only', () => {
    it('Buy Food only', async () => {
        loginPA.visitPetKingDom();
        loginPA.loginPKD();
        homePagePA.selectFoodStore();
        foodStorePA.clickToBuyFood()
        foodStorePA.buyFoodItemFromShop()
        foodStorePA.clickGoHomeButton()
    })


})


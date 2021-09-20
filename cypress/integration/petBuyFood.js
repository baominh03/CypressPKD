/// <reference types="Cypress" />
import { LoginPA, loginPA } from "../support/PageAction/LoginPA"
import { loginPO } from "../support/PageObject/LoginPO"
import { metamaskPA } from "../support/PageAction/MetamaskPA"
import { metaMaskPO } from "../support/PageObject/MetamaskPO"
import { homePagePA } from "../support/PageAction/HomePagePA"
import { foodStorePA } from "../support/PageAction/FoodStorePA"
import { foodStorePO } from "../support/PageObject/FoodStorePO"
import { formLayoutPA } from "../support/PageAction/FormLayoutPA"


describe('first suite: login PKD', () => {


    it('Step 1 navigate to PKD', async () => {
        loginPA.visitPetKingDom();
        loginPA.loginPKD();
        homePagePA.selectFoodStore();
        foodStorePA.clickToBuyFood()
        foodStorePA.buyFoodItemFromShop()
        foodStorePA.clickGoHomeButton()
        foodStorePA.feedThePet(3, 2)
    })




})


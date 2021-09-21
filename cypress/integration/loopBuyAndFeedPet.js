/// <reference types="Cypress" />
import { LoginPA, loginPA } from "../support/PageAction/LoginPA"
import { homePagePA } from "../support/PageAction/HomePagePA"
import { foodStorePA } from "../support/PageAction/FoodStorePA"



describe('First suite: Feed one 1 pet to 100 stamina', () => {
    it('Feed 1 pet to 100 stamina', async () => {
        loginPA.visitPetKingDom();
        loginPA.loginPKD();
        homePagePA.selectFoodStore();
        cy.fixture('pkdUser').then((petkingdom) => {
            foodStorePA.feedThePetTo100(petkingdom.primaryPet,petkingdom.fuckPet)
        })
    })

})


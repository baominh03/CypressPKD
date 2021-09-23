/// <reference types="Cypress" />
import { loginPA } from "../support/PageAction/LoginPA"
import { homePagePA } from "../support/PageAction/HomePagePA"
import { foodStorePA } from "../support/PageAction/FoodStorePA"
var path = require('path');


describe('First suite: Feed one 1 pet to 100 stamina', () => {
    it('Feed 1 pet to 100 stamina', () => {
        loginPA.visitPetKingDom()
        cy.fixture('pkdUser').then((petkingdom) => {
            loginPA.loginPKDScholarMode(petkingdom.email, petkingdom.password)
            homePagePA.selectFoodStore()
            foodStorePA.feedThePetTo100(petkingdom.primaryPet, petkingdom.fuckPet, petkingdom.dificulty)
        })
    })

    it('MMMMM', () => {
        cy.log('END')

    })

})


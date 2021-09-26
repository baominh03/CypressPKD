/// <reference types="Cypress" />
import { loginPA } from "../support/PageAction/LoginPA"
import { homePagePA } from "../support/PageAction/HomePagePA"
import { foodStorePA } from "../support/PageAction/FoodStorePA"
import { slackNotification } from "../support/Ultil/SlackNotification";


describe('pkdUser_01: Feed one 1 pet to 100 stamina', () => {
    it('Feed 1 pet to 100 stamina', () => {
        cy.fixture('pkdUser_02').then((petkingdom) => {
            loginPA.visitPetKingDom();
            loginPA.loginPKDScholarMode(petkingdom.email, petkingdom.password);
            homePagePA.selectFoodStore();
            foodStorePA.feedThePetTo100(petkingdom.primaryPet, petkingdom.fuckPet, petkingdom.dificulty, petkingdom.email)
        })
    })

    it('MMMMM', () => {
        cy.log('END')

    })


    beforeEach(function () {
        cy.fixture('pkdUser_02').then((petkingdom) => {
            slackNotification.sendMsgToSlackAndTelegram('Start game for email: ' + petkingdom.email)
        })
    });



    afterEach(function () {
        cy.fixture('pkdUser_02').then((petkingdom) => {
            slackNotification.sendMessagetoSlackWithTag('End game for email: ' + petkingdom.email, 'U02F2TQJW1M')
            slackNotification.sendMessagetoTelegram('End game for email: ' + petkingdom.email)
        })
    });
})


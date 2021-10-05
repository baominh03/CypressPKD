/// <reference types="Cypress" />
import { loginPA } from "../../support/PageAction/LoginPA"
import { homePagePA } from "../../support/PageAction/HomePagePA"
import { foodStorePA } from "../../support/PageAction/FoodStorePA"
import { slackNotification } from "../../support/Ultil/SlackNotification";
var path = require('path');


beforeEach(function () {
    Cypress.config('slack_channel', '#a_farmer')
    cy.fixture('pkdUser_01').then((petkingdom) => {
        Cypress.config('slack_channel', '#a_farmer_01')
        slackNotification.cypressInitialEnvironmentlog(petkingdom.email, petkingdom.primaryPet, petkingdom.fuckPet, Cypress.config('slack_channel'))
    })

})



afterEach(function () {
    cy.fixture('pkdUser_01').then((petkingdom) => {
        slackNotification.sendMessagetoSlackWithTag('End game for email: ' + petkingdom.email, 'U02F2TQJW1M')
        slackNotification.sendMessagetoTelegram('End game for email: ' + petkingdom.email)
    })
});

describe('User 1: Feed pet until 100 stamina', () => {
    it('Feed 1 pet to 100 stamina', {
        retries: {
            runMode: 30,
            openMode: 1,
        },
    }, () => {
        cy.fixture('pkdUser_01').then((petkingdom) => {
            loginPA.visitPetKingDom()
            loginPA.loginPKDScholarMode(petkingdom.email, petkingdom.password)
            slackNotification.sendMsgToSlackAndTelegram('Start game: All pets reached daily limit - Go feed them till 100 stamina ' + petkingdom.email + ' - select world: ' + petkingdom.world)
            homePagePA.selectWorld(petkingdom.world)
            homePagePA.selectFoodStore()
            foodStorePA.selectPetToRun(petkingdom.numberOfPets, petkingdom.fuckPet, petkingdom.email)
            slackNotification.sendMsgToSlackTagUserAndTelegram('3 pets reached maximum Stamina for email: ' + petkingdom.email)

        })
    })

    it('MMMMM', () => {
        cy.log('END')

    })

})


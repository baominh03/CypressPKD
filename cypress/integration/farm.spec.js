/// <reference types="Cypress" />
import { loginPA } from "../support/PageAction/LoginPA"
import { homePagePA } from "../support/PageAction/HomePagePA"
import { foodStorePA } from "../support/PageAction/FoodStorePA"
import { slackNotification } from "../support/Ultil/SlackNotification";
var path = require('path');


beforeEach(function() {
    Cypress.config('slack_channel', '#a_farmer')
    cy.fixture('pkdUser').then((petkingdom) => {
        Cypress.config('slack_channel', '#a_farmer')
        slackNotification.sendMsgToSlackAndTelegram('Start game for email: ' + petkingdom.email)
        slackNotification.cypressInitialEnvironmentlog(petkingdom.email, petkingdom.primaryPet, petkingdom.fuckPet, Cypress.config('slack_channel'))
    })
  });



afterEach(function() {
    cy.fixture('pkdUser').then((petkingdom) => {
        slackNotification.sendMessagetoSlackWithTag('End game for email: ' + petkingdom.email, 'U02F2TQJW1M')
        slackNotification.sendMessagetoTelegram('End game for email: ' + petkingdom.email)
    })
  });

describe('First suite: Feed one 1 pet to 100 stamina', () => {
    it('Feed 1 pet to 100 stamina', () => {
        cy.fixture('pkdUser').then((petkingdom) => {
            loginPA.visitPetKingDom()
            loginPA.loginPKDScholarMode(petkingdom.email, petkingdom.password)
            homePagePA.selectFoodStore()
            foodStorePA.feedThePetTo100(petkingdom.primaryPet, petkingdom.fuckPet, petkingdom.dificulty, petkingdom.email)

        })
    })

    it('MMMMM', () => {
        cy.log('END')

    })

})


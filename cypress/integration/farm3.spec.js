/// <reference types="Cypress" />
import { loginPA } from "../support/PageAction/LoginPA"
import { homePagePA } from "../support/PageAction/HomePagePA"
import { foodStorePA } from "../support/PageAction/FoodStorePA"
import { slackNotification } from "../support/Ultil/SlackNotification";

beforeEach(function () {
    cy.fixture('pkdUser_03').then((petkingdom) => {
        Cypress.config('slack_channel', '#a_farmer_03_b')
        // slackNotification.sendMsgToSlackAndTelegram('Start game for email: ' + petkingdom.email)
        slackNotification.cypressInitialEnvironmentlog(petkingdom.email, petkingdom.primaryPet, petkingdom.fuckPet, Cypress.config('slack_channel'), petkingdom.autoFeed100)
    })
});

afterEach(function () {
    cy.fixture('pkdUser_03').then((petkingdom) => {
        slackNotification.sendMessagetoSlackWithTag('End game for email: ' + petkingdom.email)
        slackNotification.sendMessagetoTelegram('End game for email: ' + petkingdom.email)
    })
});

describe('pkdUser_01: Feed one 1 pet to 100 stamina', () => {
    it('Feed 1 pet to 100 stamina', {
        retries: {
            runMode: 30,
            openMode: 1,
        },
    }, () => {


        cy.fixture('pkdUser_03').then((petkingdom) => {
            loginPA.visitPetKingDom();
            loginPA.loginPKDScholarMode(petkingdom.email, petkingdom.password);
            homePagePA.selectWorld(petkingdom.world);
            homePagePA.selectFoodStore();
            foodStorePA.autofarm(petkingdom.primaryPet, petkingdom.fuckPet, petkingdom.dificulty, petkingdom.email, petkingdom.numberOfPets, petkingdom.autoFeed100, petkingdom.world);
        })
    })

    it('MMMMM', () => {
        cy.log('END')

    })


})


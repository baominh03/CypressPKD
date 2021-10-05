/// <reference types="Cypress" />
import { battleFieldPO } from "../PageObject/BattleFieldPO"
import { slackNotification } from "../Ultil/SlackNotification"
import { webElementSupport } from "../Ultil/WebElementSupport"


export class BattleFieldPA {

    changePetToFight(primaryPet) {
        battleFieldPO.getElementChangePet().trigger('mouseover', { timeout: 10000 }).click().then(() => {
            battleFieldPO.getElementAcceptButtonAtPetSelection().should('be.visible', { timeout: 20000 }).then(() => {
                battleFieldPO.getElementSelectButton().eq(primaryPet - 1).click().then(() => {
                    cy.wait(500).then(() => {
                        if (webElementSupport.checkElementExist(battleFieldPO.getElementAcceptButtonAtPetSelectionString())) {
                            cy.log('Your pet is selected')
                            battleFieldPO.getElementAcceptButtonAtPetSelection().click()
                        }
                    })
                })

            })
        })
    }

    selectEnemies(dificultLevel) {
        let index
        switch (dificultLevel) {
            case 'easy':
                index = 0
                break;
            case 'normal':
                index = 1
                break;
            case 'hard':
                index = 2
                break;
            case 'extreme':
                index = 3
                break;
            default:
                index = 0
        }
        if (webElementSupport.checkElementExist(battleFieldPO.getElementEnemiesString()) == true) {
            battleFieldPO.getElementEnemies().eq(index).click().then(() => {
                // if (battleFieldPO.getElementCurrentLevelEnemies().length = level.dificultLevel) {
                //     cy.log('Selected ${dificultLevel} enemy with skull= [' + battleFieldPO.getElementCurrentLevelEnemies().length + ']')
                // }
            })
        }
    }



    fightEnemy(email, waitWinningInMS = 7000, waitAlertInMs = 1500) {
        if (webElementSupport.checkElementExist(battleFieldPO.getElementEnemiesString()) == true) {
            cy.log('[Enemies list] displayed: lets fight')
            battleFieldPO.getElementCurrentFightButton().trigger('mouseover', { timeout: 10000 }).click().then(() => {
                cy.wait(waitWinningInMS).then(() => {
                    if (!webElementSupport.checkElementExist(battleFieldPO.getElementWinDialogString())) {
                        battleFieldPO.getElementAlertDialog().should('be.visible', { timeout: 20000 }).then(() => {
                            cy.log('[Alert Dialog] displayed: Reach limit farming for this Pet -> clicked Accept')
                            battleFieldPO.getElementAcceptButtonOnAlertDialog().click({ force: true })
                            this.fightEnemy(email)
                        })
                    } else {
                        cy.log('[Result Dialog] displayed -> clicked Accept -> Go ahead earn PKD and EXP')
                        battleFieldPO.getElementAcceptButtonOnResultDialog().click({ force: true })
                        cy.wait(waitAlertInMs).then(() => {
                            if (webElementSupport.checkElementExist(battleFieldPO.getElementAlertDialogString())) {
                                cy.log('[Alert Dialog] displayed: Reach limit farming for this Pet -> clicked Accept')
                                battleFieldPO.getElementAcceptButtonOnAlertDialog().click({ force: true })
                            }
                        })
                        this.fightEnemy(email)
                    }
                })


            })
        } else {
            cy.log('Pet said: Im tired, I need some rest zZzZzZ')
            // slackNotification.sendMsgToSlackAndTelegram('Pet said: Im tired, I need some rest zZzZzZ for email: ' + email)
        }
    }


    // cy.readFile('cypress/fixtures/pkdUser.json').then((json) => {
    //     cy.log(json.petLimit.pet1 = 1993)
    //   })


    fightEnemyAndCheckLimit(email, waitWinningInMS = 7000, waitAlertInMs = 1500) {
        let result = false
        if (webElementSupport.checkElementExist(battleFieldPO.getElementEnemiesString()) == true) {
            cy.log('[Enemies list] displayed: lets fight')
            battleFieldPO.getElementCurrentFightButton().trigger('mouseover', { timeout: 10000 }).click().then(() => {
                cy.wait(waitWinningInMS).then(async function () {
                    if (!webElementSupport.checkElementExist(battleFieldPO.getElementWinDialogString())) {
                        await battleFieldPO.getElementAlertDialog().should('be.visible', { timeout: 20000 }).then(async function () {
                            cy.log('[Alert Dialog] displayed: Reach limit farming for this Pet -> clicked Accept')
                            await battleFieldPO.getElementAcceptButtonOnAlertDialog().click({ force: true })
                            slackNotification.sendMsgToSlackAndTelegram('Reach limit pet: ' + primaryPet + ' for email: ' + email)
                        })
                    } else {
                        cy.log('[Result Dialog] displayed -> clicked Accept -> Go ahead earn PKD and EXP')
                        await battleFieldPO.getElementAcceptButtonOnResultDialog().click({ force: true })
                        cy.wait(waitAlertInMs).then(async function () {
                            if (webElementSupport.checkElementExist(battleFieldPO.getElementAlertDialogString())) {
                                await cy.log('[Alert Dialog] displayed: Reach limit farming for this Pet -> clicked Accept')
                                await battleFieldPO.getElementAcceptButtonOnAlertDialog().click({ force: true })
                                const promise1 = new Promise((resolve, reject) => {
                                    resolve(true);
                                });
                                promise1.then((flag) => {
                                    cy.log('FLAG is' + flag);
                                    if (flag) {
                                        cy.log('return True')
                                        result = true
                                    } else {
                                        cy.log('return false di danh tiep')
                                        battleFieldPA.fightEnemyAndCheckLimit(email)
                                    }
                                });
                            }
                        })
                    }





                })
            })
        } else {
            cy.log('Pet said: Im tired, I need some rest zZzZzZ')
            slackNotification.sendMsgToSlackAndTelegram('Pet said: Im tired, I need some rest zZzZzZ for email: ' + email)
            result = false
        }
        cy.log('fightEnemyAndCheckLimit result ' + result)
        return result
    }



}

export const battleFieldPA = new BattleFieldPA()
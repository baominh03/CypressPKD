/// <reference types="Cypress" />
import { battleFieldPO } from "../PageObject/BattleFieldPO"
import { webElementSupport } from "../Ultil/WebElementSupport"


export class BattleFieldPA {

    changePetToFight(primaryPet) {
        battleFieldPO.getElementChangePet().trigger('mouseover', { timeout: 10000 }).click().then(() => {
            battleFieldPO.getElementPopupSelectPet().should('be.visible', { timeout: 20000 }).then(() => {
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



    fightEnemy(waitWinningInMS = 10000, waitAlertInMs = 2000) {
        if (webElementSupport.checkElementExist(battleFieldPO.getElementEnemiesString()) == true) {
            cy.log('[Enemies list] displayed: lets fight')
            battleFieldPO.getElementCurrentFightButton().trigger('mouseover', { timeout: 10000 }).click().then(() => {
                cy.wait(waitWinningInMS).then(() => {
                    if (!webElementSupport.checkElementExist(battleFieldPO.getElementWinDialogString())) {
                        battleFieldPO.getElementAlertDialog().should('be.visible', { timeout: 20000 }).then(() => {
                            cy.log('[Alert Dialog] displayed: Reach limit farming for this Pet -> clicked Accept')
                            battleFieldPO.getElementAcceptButtonOnAlertDialog().click()
                            this.fightEnemy()
                        })
                    } else {
                        cy.log('[Result Dialog] displayed -> clicked Accept -> Go ahead earn PKD and EXP')
                        battleFieldPO.getElementAcceptButtonOnResultDialog().click()
                        cy.wait(waitAlertInMs).then(() => {
                            if (webElementSupport.checkElementExist(battleFieldPO.getElementAlertDialogString())) {
                                cy.log('[Alert Dialog] displayed: Reach limit farming for this Pet -> clicked Accept')
                                battleFieldPO.getElementAcceptButtonOnAlertDialog().click()
                            }
                        })
                        this.fightEnemy()
                    }
                })


            })
        } else cy.log('Pet said: Im tired, I need some rest zZzZzZ')


    }


}

export const battleFieldPA = new BattleFieldPA()
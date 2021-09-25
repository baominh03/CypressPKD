/// <reference types="Cypress" />
import { battleFieldPO } from "../PageObject/BattleFieldPO"
import { foodStorePO } from "../PageObject/FoodStorePO"
import { listFood } from "../PageObject/ListFood"
import { slackNotification } from "../Ultil/SlackNotification"
import { webElementSupport } from "../Ultil/WebElementSupport"
import { battleFieldPA } from "./BattleFieldPA"
import { homePagePA } from "./HomePagePA"


export class FoodStorePA {
    clickToBuyFood() {
        foodStorePO.getElementPetIDUnderFoodStore().then(() => {
            cy.wait(1000).then(() => {
                foodStorePO.getElementClick2BuyFood().should('be.visible', { timeout: 20000 }).click({ force: true })
            })

        })
    }

    click2FoodItemFromShop() {
        foodStorePO.getFoodItemFromShop().first().trigger('mouseover', { timeout: 10000 }).click()
    }

    buyFoodItemFromShop(waitInMs = 3000) {
        foodStorePO.getFoodItemFromShop().should('be.visible', { timeout: 20000 }).then(() => {
            cy.wait(waitInMs).then(() => {
                if (webElementSupport.checkElementExist(foodStorePO.getAvailableFoodItemFromShopString())) {
                    foodStorePO.getAvailableFoodItemFromShop().then((availableFood) => {
                        cy.log('THERE ARE [' + availableFood.length + '] AVAILABLE FOOD')
                        for (let i = 0; i < availableFood.length; i++) {
                            foodStorePO.getFoodItemFromShop().first().trigger('mouseover', { timeout: 10000 }).click().then(() => {
                                cy.log('CLICKED ON FOOD: [' + i + ']\n => AVAILABLE FOOD REMAINING [' + (availableFood.length - (i + 1) + '] item(s)'))
                                foodStorePO.getBuyButtonFromShop().trigger('mouseover').click()
                            })
                        }
                    })
                }
            })
        })
    }

    clickGoHomeButton() {
        foodStorePO.getElementGoHomeButton().click()
    }

    selectPet(index) {
        foodStorePO.getElementPetIDUnderFoodStore().should('be.visible', { timeout: 20000 }).then(() => {
            cy.log('Selected pet [' + index + ']')
            foodStorePO.getElementPetIDUnderFoodStore().eq(index - 1).click()
        })
        return foodStorePO.getElementPetIDUnderFoodStore()
    }

    clickOnFood() {
        foodStorePO.getElementBoughtFood().first().click()
    }

    logicFeedPet(primaryPet, fuckPet, email) {
        foodStorePO.getElementBoughtFood().first().trigger('mouseover', { timeout: 10000 }).wait(1500).then(() => {
            foodStorePO.getElementFoodToolTip().first().then((tooltip) => {
                cy.log('#####Tooltip is: ' + tooltip.text())
                slackNotification.sendMessagetoSlack('Get tool tip: ' + tooltip.text())
                foodStorePO.getElementFoodContainItem().first().invoke('attr', 'src').then((url) => {
                    cy.log('######URL is: ' + url)
                    slackNotification.sendMessagetoSlack('URL is: ' + url)
                    cy.log('###Food Recovery Number: ' + listFood.convertListFoodtoEnegryNumber(url, tooltip.text()))
                    slackNotification.sendMessagetoSlack('Food Recovery Number: ' + listFood.convertListFoodtoEnegryNumber(url, tooltip.text()),  + ' - Pet: ' + primaryPet + ' for email: ' + email)
                    if (Number(listFood.convertListFoodtoEnegryNumber(url, tooltip.text())) >= 0) {
                        this.selectPet(primaryPet).then(() => {
                            cy.log('###Selected primary pet')
                            foodStorePO.getElementPetStamina().then((stamina) => {
                                cy.log('###STAMINA BEFORE: [' + stamina.text() + ']')
                                slackNotification.sendMessagetoSlack('STAMINA BEFORE: ' + stamina.text() + ' - Pet: ' + primaryPet + ' for email: ' + email)
                                if (stamina.text().split('/')[0] < 100) {
                                    foodStorePO.getElementPetStamina().should('be.visible').then(() => {
                                        foodStorePO.getElementBoughtFood().first().click().then(() => {
                                            foodStorePO.getElementFeedButton().click().wait(2000).then(() => {
                                                cy.log('###Clicked Feed pet ###')
                                                foodStorePO.getElementPetStamina().then((actual) => {
                                                    let strMsg = 'ACTUAL STAMINA: ' + actual.text() + ' - Pet: ' + primaryPet + ' for email: ' + email
                                                    cy.log(strMsg)
                                                    slackNotification.sendMessagetoSlack(strMsg)
                                                })
                                            })
                                            cy.log('###PRIMARY PET STAMINA AFTER FEEDING: [' + (Number(stamina.text().split('/')[0]) + Number(listFood.convertListFoodtoEnegryNumber(url, tooltip.text()))) + '/100]')
                                        })
                                    })
                                }
                            })
                        })
                    } else {
                        this.selectPet(fuckPet).then(() => {
                            cy.log('###Selected Fuck pet to eat boom')
                            foodStorePO.getElementPetStamina().should('be.visible', { timeout: 20000 }).then(() => {
                                foodStorePO.getElementBoughtFood().first().click().then(() => {
                                    foodStorePO.getElementFeedButton().click()
                                    cy.log('###Clicked Feed for Fuck pet ###')
                                })
                            })
                        })
                    }
                })

            })
            
        })
    }


    feedThePet(primaryPet, fuckPet, email, waitInMS = 3000) {
        cy.wait(waitInMS).then(() => {
            if (webElementSupport.checkElementExist(foodStorePO.getElementFoodContainItemString())) {
                foodStorePO.getElementFoodContainItem().then((element) => {
                    cy.log('Lets Buy some FOOD for our fucking pets')
                    for (let i = 0; i < element.length; i++) {
                        this.logicFeedPet(primaryPet, fuckPet, email)
                    }
                })
            } else {
                slackNotification.sendMsgToSlackAndTelegram('Delay 8 minutes - pet: ' + primaryPet + ' for email: ' + email)
                this.selectPet(primaryPet).then(() => {
                    foodStorePO.getElementPetStamina().then((actual) => {
                        let strMsg = 'CURRENT STAMINA: ' + actual.text() + ' - Pet: ' + primaryPet + ' for email: ' + email
                        cy.log(strMsg)
                        slackNotification.sendMsgToSlackAndTelegram(strMsg)
                    })
                })
                cy.log('###===========### DELAY 8 MINUTES ###===========### DELAY 8 MINUTES ###===========')
                cy.wait(480000)
            }
        })

    }

    feedThePetTo100(primaryPet, fuckPet, dificultLevel, email) {
        this.selectPet(primaryPet).then(() => {
            foodStorePO.getElementPetStamina().then((stamina) => {
                cy.log('PRIMARY PET STAMINA: [' + stamina.text() + ']')
                if (stamina.text().split('/')[0] < 100) {
                    cy.log('Keep you pet get feeded - Stamia: [' + stamina.text().split('/')[0] + ']')
                    this.clickToBuyFood()
                    this.buyFoodItemFromShop()
                    this.clickGoHomeButton()
                    this.feedThePet(primaryPet, fuckPet, email)
                    this.feedThePetTo100(primaryPet, fuckPet, dificultLevel = dificultLevel, email = email)
                } else {
                    slackNotification.sendMsgToSlackAndTelegram('Go to fight - pet: ' + primaryPet + ' for email: ' + email)
                    homePagePA.selectBattleField()
                    battleFieldPA.changePetToFight(primaryPet)
                    cy.wait(6000).then(() => {
                        battleFieldPA.selectEnemies(dificultLevel)
                    }).then(() => {
                        cy.wait(1000).then(() => {
                            battleFieldPA.fightEnemy(email)
                        }).then(() => {
                            // cy.fixture(jsonFile).then((petkingdom) => {
                            slackNotification.sendMsgToSlackAndTelegram('Reach limit pet: ' + primaryPet + ' for email: ' + email)
                            // })
                        })
                    })
                }
            })
        }).then(() => {
            homePagePA.selectFoodStoreDirectly();
            this.feedThePetTo100(primaryPet, fuckPet, dificultLevel = dificultLevel, email)
        })
    }



}
export const foodStorePA = new FoodStorePA()
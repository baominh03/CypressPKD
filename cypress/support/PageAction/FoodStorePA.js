/// <reference types="Cypress" />
import { battleFieldPO } from "../PageObject/BattleFieldPO"
import { foodStorePO } from "../PageObject/FoodStorePO"
import { webElementSupport } from "../Ultil/WebElementSupport"
import { battleFieldPA } from "./BattleFieldPA"
import { homePagePA } from "./HomePagePA"


export class FoodStorePA {
    clickToBuyFood() {
        foodStorePO.getElementPetIDUnderFoodStore().then(() => {
            cy.wait(1000).then(() => {
                foodStorePO.getElementClick2BuyFood().should('be.visible', { timeout: 20000 }).click()
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

    // logicFeedPet(primaryPet, fuckPet) {
    //     foodStorePO.getElementBoughtFood().first().trigger('mouseover', { timeout: 10000 }).wait(1000).then(() => {
    //         foodStorePO.getElementRecoveryNumber().then((recoveryElement) => {
    //             cy.log('Food Recovery Number: ' + recoveryElement.text())
    //             if (recoveryElement.text() >= 0) {
    //                 this.selectPet(primaryPet).then(() => {
    //                     cy.log('Selected primary pet')
    //                     foodStorePO.getElementPetStamina().then((stamina) => {
    //                         cy.log('PRIMARY PET STAMINA BEFORE FEEDING: [' + stamina.text() + ']')
    //                         if (stamina.text().split('/')[0] < 100) {
    //                             foodStorePO.getElementPetStamina().should('be.visible').then(() => {
    //                                 foodStorePO.getElementBoughtFood().first().click().then(() => {
    //                                     foodStorePO.getElementFeedButton().click()
    //                                     cy.log('PRIMARY PET STAMINA AFTER FEEDING: [' + (Number(stamina.text().split('/')[0]) + Number(recoveryElement.text())) + '/100]')
    //                                 })
    //                             })
    //                         }
    //                     })
    //                 })
    //             } else if (recoveryElement.text() < 0) {
    //                 this.selectPet(fuckPet).then(() => {
    //                     cy.log('Selected Fuck pet to eat boom')
    //                     foodStorePO.getElementPetStamina().should('be.visible', { timeout: 20000 }).then(() => {
    //                         foodStorePO.getElementBoughtFood().first().click().then(() => {
    //                             foodStorePO.getElementFeedButton().click()
    //                         })
    //                     })
    //                 })
    //             }
    //         })
    //     })
    // }

    logicFeedPet(primaryPet, fuckPet) {
        foodStorePO.getElementBoughtFood().first().trigger('mouseover', { timeout: 10000 }).wait(1000).then(() => {
            foodStorePO.getElementRecoveryNumber().then((recoveryElement) => {
                cy.log('Food Recovery Number: ' + recoveryElement.text())
                if (recoveryElement.text() >= 0) {
                    this.selectPet(primaryPet).then(() => {
                        cy.log('Selected primary pet')
                        foodStorePO.getElementPetStamina().then((stamina) => {
                            cy.log('PRIMARY PET STAMINA BEFORE FEEDING: [' + stamina.text() + ']')
                            if (stamina.text().split('/')[0] < 100) {
                                if ((stamina.text().split('/')[0] + recoveryElement.text()) <= 100) {
                                    foodStorePO.getElementPetStamina().should('be.visible').then(() => {
                                        foodStorePO.getElementBoughtFood().first().click().then(() => {
                                            foodStorePO.getElementFeedButton().click()
                                            cy.log('PRIMARY PET STAMINA AFTER FEEDING: [' + (Number(stamina.text().split('/')[0]) + Number(recoveryElement.text())) + '/100]')
                                        })
                                    })
                                } else {
                                    foodStorePO.getElementClick2BuyFood().then((totalPets) => {
                                        for (let i = 0; i < totalPets.length; i++) {
                                            if(!((i+1) = fuckPet)) {
                                                logicFeedPet(i, fuckPet)
                                            }
                                        }
                                    })
                                }

                            }
                        })
                    })
                } else if (recoveryElement.text() < 0) {
                    this.selectPet(fuckPet).then(() => {
                        cy.log('Selected Fuck pet to eat boom')
                        foodStorePO.getElementPetStamina().should('be.visible', { timeout: 20000 }).then(() => {
                            foodStorePO.getElementBoughtFood().first().click().then(() => {
                                foodStorePO.getElementFeedButton().click()
                            })
                        })
                    })
                }
            })
        })


    }


    feedThePet(primaryPet, fuckPet, waitInMS = 3000) {
        cy.wait(waitInMS).then(() => {
            if (webElementSupport.checkElementExist(foodStorePO.getElementBoughtFoodString())) {
                foodStorePO.getElementBoughtFood().then((element) => {
                    cy.log('Lets Buy some FOOD for our fucking pets')
                    for (let i = 0; i < element.length; i++) {
                        this.logicFeedPet(primaryPet, fuckPet)
                    }
                })
            } else {
                cy.log('Out of Food, please wait go to buy some more')
                cy.log('###===========### DELAY 8 MINUTES ###===========### DELAY 8 MINUTES ###===========')
                cy.wait(480000)
            }
        })

    }

    feedThePetTo100(primaryPet, fuckPet, dificultLevel) {
        this.selectPet(primaryPet).then(() => {
            foodStorePO.getElementPetStamina().then((stamina) => {
                cy.log('PRIMARY PET STAMINA: [' + stamina.text() + ']')
                if (stamina.text().split('/')[0] < 100) {
                    cy.log('Keep you pet get feeded - Stamia: [' + stamina.text().split('/')[0] + ']')
                    this.clickToBuyFood()
                    this.buyFoodItemFromShop()
                    this.clickGoHomeButton()
                    this.feedThePet(primaryPet, fuckPet)
                    this.feedThePetTo100(primaryPet, fuckPet)
                } else {
                    homePagePA.selectBattleField()
                    battleFieldPA.changePetToFight(primaryPet)
                    cy.wait(6000).then(() => {
                        battleFieldPA.selectEnemies(dificultLevel)
                    }).then(() => {
                        cy.wait(1000).then(() => {
                            battleFieldPA.fightEnemy()
                        })
                    })
                }
            })
        }).then(() => {
            // cy.log('###===========### DELAY 8 MINUTES ###===========### DELAY 8 MINUTES ###===========')
            // cy.wait(480000).then(() => {
            homePagePA.selectFoodStoreDirectly();
            this.feedThePetTo100(primaryPet, fuckPet)
            // })
        })
    }



}
export const foodStorePA = new FoodStorePA()
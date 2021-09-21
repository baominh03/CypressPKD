/// <reference types="Cypress" />
import { foodStorePO } from "../PageObject/FoodStorePO"
import { webElementSupport } from "../Ultil/WebElementSupport"


export class FoodStorePA {
    clickToBuyFood() {
        foodStorePO.getElementPetIDUnderFoodStore().should('be.visible').then(() => {
            foodStorePO.getElementClick2BuyFood().trigger('mouseover').click()
        })
    }

    click2FoodItemFromShop() {
        foodStorePO.getFoodItemFromShop().first().trigger('mouseover').click()
    }

    buyFoodItemFromShop() {
        foodStorePO.getFoodItemFromShop().should('be.visible').then(() => {
            cy.log('')
            foodStorePO.getAvailableFoodItemFromShop().then((availableFood) => {
                cy.log('THERE ARE [' + availableFood.length + '] AVAILABLE FOOD')
                for (let i = 0; i < availableFood.length; i++) {
                    foodStorePO.getFoodItemFromShop().first().trigger('mouseover').click().then(() => {
                        cy.log('CLICKED ON AVAILABLE FOOD: [' + i + ']')
                        cy.log('AVAILABLE FOOD ' + (availableFood.length - (i + 1)))
                        foodStorePO.getBuyButtonFromShop().trigger('mouseover').click()
                    })
                }
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
            })
        })
    }

    clickGoHomeButton() {
        foodStorePO.getElementGoHomeButton().click()
    }

    selectPet(index) {
        foodStorePO.getElementPetIDUnderFoodStore().should('be.visible').then(() => {
            cy.log('Selected pet [' + index + ']')
            foodStorePO.getElementPetIDUnderFoodStore().eq(index - 1).click()
        })
        return foodStorePO.getElementPetIDUnderFoodStore()
    }

    getFoodInformation() {
        foodStorePO.getElementBoughtFood().first().trigger('mouseover').wait(1000).then(() => {
            foodStorePO.getElementRecoveryNumber().invoke('text').then((number) => {
                cy.log('@@@@@@ Recovery: ' + length)
            })
            foodStorePO.getElementRecoveryNumber().invoke('text').then((number) => {
                return number
            })
        })
    }

    clickOnFood() {
        foodStorePO.getElementBoughtFood().first().click()
    }

    logicFeedPet(primaryPet, fuckPet) {
        foodStorePO.getElementBoughtFood().first().trigger('mouseover').wait(1000).then(() => {
            foodStorePO.getElementRecoveryNumber().then((recoveryElement) => {
                cy.log('Food Recovery Number: ' + recoveryElement.text())
                if (recoveryElement.text() >= 0) {
                    this.selectPet(primaryPet).then(() => {
                        cy.log('Selected primary pet')
                        foodStorePO.getElementPetStamina().then((stamina) => {
                            cy.log('PRIMARY PET STAMINA BEFORE: [' + stamina.text() + ']')
                            if (stamina.text().split('/')[0] < 100) {
                                foodStorePO.getElementPetStamina().should('be.visible').then(() => {
                                    foodStorePO.getElementBoughtFood().first().click().then(() => {
                                        foodStorePO.getElementFeedButton().click().wait(500)
                                        cy.log('PRIMARY PET STAMINA AFTER: [' + (Number(stamina.text().split('/')[0]) + Number(recoveryElement.text())) + '/100]')
                                    })
                                })
                            }
                        })
                    })
                } else {
                    this.selectPet(fuckPet).then(() => {
                        cy.log('Selected Fuck pet to eat boom')
                        foodStorePO.getElementPetStamina().should('be.visible').then(() => {
                            foodStorePO.getElementBoughtFood().first().click().then(() => {
                                foodStorePO.getElementFeedButton().click().wait(500)
                            })
                        })
                    })
                }
            })
        })

    }


    feedThePet(primaryPet, fuckPet) {
        foodStorePO.getElementBoughtFood().then((element) => {
            for (let i = 0; i < element.length; i++) {
                this.logicFeedPet(primaryPet, fuckPet)
            }
        })
    }

    feedThePetTo100(primaryPet, fuckPet) {
            this.selectPet(primaryPet).then(() => {
                foodStorePO.getElementPetStamina().then((stamina) => {
                    cy.log('PRIMARY PET STAMINA: [' + stamina.text() + ']')
                    if (stamina.text().split('/')[0] < 100) {
                        cy.log('Keep you pet get feeded - Stamia: [' + stamina.text().split('/')[0] + ']')
                        this.clickToBuyFood()
                        this.buyFoodItemFromShop()
                        this.clickGoHomeButton()
                        this.feedThePet(primaryPet, fuckPet)
                        cy.log('###===========### DELAY 8 MINUTES ###===========### DELAY 8 MINUTES ###===========')
                        cy.wait(480000).then(() => {
                            this.feedThePetTo100(primaryPet, fuckPet)
                        })
                    }

                })
            })

    }



}
export const foodStorePA = new FoodStorePA()
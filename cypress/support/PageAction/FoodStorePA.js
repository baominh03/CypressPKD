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
                        foodStorePO.getBuyButtonFrfromShop().trigger('mouseover').click().wait(500)
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


}
export const foodStorePA = new FoodStorePA()
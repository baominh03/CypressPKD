/// <reference types="Cypress" />

export class FoodStorePO {

    getElementClick2BuyFood() {
        return cy.get('.food_sub-title', { timeout : 10000})
    }

    getElementPetIDUnderFoodStore() {
        return cy.get('.food_character--identity', { timeout : 10000})
    }

    getLoadingIcon(){
        return cy.get('.app__content .loading-page', { timeout : 10000})
    }
    
    getFoodItemFromShop(){
        return cy.get('.food_list-buy--full-food .food_content--flex', { timeout : 10000})
    }

    getAvailableFoodItemFromShop(){
        return cy.get('.food_list-buy--full-food .food_content--flex .food_content--item', { timeout : 10000})
    }

    getBuyButtonFrfromShop(){
        return cy.get('.food_shopping--button-buy', { timeout : 10000})
    }

    getElementSelectedFood(){
        return cy.get('.food_shopping .food_content--item', { timeout : 10000})
    }

    getElementGoHomeButton(){
        return cy.get('.food_shopping--button-home', { timeout : 10000})
    }

    getElementBoughtFood(){
        return cy.get('.food_content--name', { timeout : 10000})
    }

    getElementRecoveryNumber() {
        return cy.get('.food_tooltip--content span', { timeout : 10000})
    }

    getElementPetStamina() {
        return cy.get('.food_large-character--vitality-number', { timeout : 10000})
    }

    getElementFeedButton() {
        return cy.get('.food_large-character--button-feed', { timeout : 10000})
    }

} 
export const foodStorePO = new FoodStorePO()
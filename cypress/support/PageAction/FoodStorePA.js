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
        let foodValue
        foodStorePO.getElementBoughtFood().first().trigger('mouseover', { timeout: 10000 }).wait(1500).then(() => {
            foodStorePO.getElementFoodToolTip().first().then((tooltip) => {
                cy.log('#####Tooltip is: ' + tooltip.text())
                // slackNotification.sendMessagetoSlack('Get tool tip: ' + tooltip.text())
                foodStorePO.getElementFoodContainItem().first().invoke('attr', 'src').then((url) => {
                    foodValue = listFood.convertListFoodtoEnegryNumber(url, tooltip.text())
                    // cy.log('######URL is: ' + url)
                    // slackNotification.sendMessagetoSlack('URL is: ' + url)
                    cy.log('###Food Recovery Number: ' + foodValue)
                    // slackNotification.sendMessagetoSlack('Food Recovery Number: ' + foodValue + ' - Pet: ' + primaryPet + ' for email: ' + email)
                    if (Number(foodValue) >= 0) {
                        this.selectPet(primaryPet).then(() => {
                            cy.log('###Selected primary pet')
                            foodStorePO.getElementPetStamina().then((stamina) => {
                                cy.log('###STAMINA BEFORE: [' + stamina.text() + ']')
                                // slackNotification.sendMessagetoSlack('STAMINA BEFORE: ' + stamina.text() + ' - Pet: ' + primaryPet + ' for email: ' + email)
                                if (stamina.text().split('/')[0] < 100) {
                                    foodStorePO.getElementPetStamina().should('be.visible').then(() => {
                                        foodStorePO.getElementBoughtFood().first().click().then(() => {
                                            foodStorePO.getElementFeedButton().click().wait(2000).then(() => {
                                                cy.log('###Clicked Feed pet ###')
                                                foodStorePO.getElementPetStamina().then((actual) => {
                                                    let strMsg = 'ACTUAL STAMINA: ' + actual.text() + ' - Pet: ' + primaryPet + ' for email: ' + email
                                                    cy.log(strMsg)
                                                    // slackNotification.sendMessagetoSlack(strMsg)
                                                })
                                            })
                                            cy.log('###PRIMARY PET STAMINA AFTER FEEDING: [' + (Number(stamina.text().split('/')[0]) + Number(foodValue)) + '/100]')
                                        })
                                    })
                                }
                            })
                        })
                    } else {
                        this.selectPet(fuckPet).then(() => {
                            cy.log('###Selected Fuck pet to eat boom')
                            // slackNotification.sendMessagetoSlack('Selected Fuck pet to eat boom - pet: '+ fuckPet + ' for email: ' + email)
                            foodStorePO.getElementPetStamina().then((stamina) => {
                                foodStorePO.getElementBoughtFood().first().click().then(() => {
                                    foodStorePO.getElementFeedButton().click()
                                    slackNotification.sendMessagetoSlack('Pet:' + fuckPet + ' with stamina: ' + stamina.text()) + ' eat negative food'
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
                slackNotification.sendMsgToSlackAndTelegram('Delay 9 minutes - pet: ' + primaryPet + ' for email: ' + email)
                this.selectPet(primaryPet).then(() => {
                    foodStorePO.getElementPetStamina().then((actual) => {
                        let strMsg = 'CURRENT STAMINA: ' + actual.text() + ' - Pet: ' + primaryPet + ' for email: ' + email
                        cy.log(strMsg)
                        slackNotification.sendMsgToSlackAndTelegram(strMsg)
                    })
                })
                cy.log('###===========### DELAY 9 MINUTES ###===========### DELAY 9 MINUTES ###===========')
                cy.wait(540000)
            }
        })

    }

    feedThePetTo100(primaryPet, fuckPet, dificultLevel, email) { 
        this.selectPet(primaryPet).then(() => {
            foodStorePO.getElementPetStamina().then((stamina) => {
                cy.log('PRIMARY PET STAMINA: [' + stamina.text() + ']')
                if (stamina.text().split('/')[0] < Cypress.config('staminaThreshold')) {
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
                            slackNotification.sendMsgToSlackTagUserAndTelegram('Finished fighting - Pet: ' + primaryPet + ' for email: ' + email)
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


    findFuckPetLater(pathJsonFile, fuckPet) {
        cy.readFile(pathJsonFile).then((json) => {
            if (fuckPet = 1) return 1
            else if (fuckPet = json.petLimit.length) return (json.petLimit.length - 1)
            else return fuckPet + 1
        })
    }

    // selectPetToRun(pathJsonFile, fuckPet, difficultLevel, email) {
    //     cy.readFile(pathJsonFile).then((json) => {
    //         let i = 0
    //         let fuckPetLater
    //         const promise = new Promise((resolve, reject) => {
    //             resolve(fuckPetLater = this.findFuckPetLater(pathJsonFile, fuckPet));
    //         });
    //         promise.then((fuckPetLater) => {
    //             for (var key in json.petLimit) { // loop to check each pet is reach daily limit or not
    //                 if (i++ != (fuckPet - 1)) { // check is that fuckPet
    //                     if (json.petLimit[key] == 0) { //check pet still not reach daily limit = 0
    //                         if (this.feedThenFightUntillLimit(i++, fuckPet, difficultLevel, email) == true) {
    //                             cy.log('Set ' + key + 'to limit')
    //                             json.petLimit[key] = 1
    //                             cy.writeFile(pathJsonFile, json)
    //                         }
    //                     }
    //                 }
    //             }
    //             homePagePA.selectBattleField()
    //             battleFieldPA.changePetToFight(fuckPetLater)
    //             cy.wait(6000).then(() => {
    //                 battleFieldPA.selectEnemies(difficultLevel)
    //             }).then(() => {
    //                 cy.wait(1000).then(() => {
    //                     battleFieldPA.fightEnemy(email)
    //                 })
    //                 homePagePA.selectFoodStore()
    //                 this.feedThenFightUntillLimit(fuckPet, fuckPetLater, difficultLevel, email)

    //             })
    //         });

    //     })
    // }

    selectPetToRun(numberOfPets, fuckPet, email) {
        for (let i = 0; i < numberOfPets; i++) {
            cy.log('i = ' + i)
            if (i !== (fuckPet - 1)) { // check is that fuckPet
                this.feedThenFightUntillMaxStamina(i + 1, fuckPet, email)
            }
        }
    }


    feedThenFightUntillMaxStamina(primaryPet, fuckPet, email) {
        let result = false
        this.selectPet(primaryPet).then(() => {
            foodStorePO.getElementPetStamina().then((stamina) => {
                cy.log('PRIMARY PET STAMINA: [' + stamina.text() + ']')
                if (stamina.text().split('/')[0] < 100) {
                    cy.log('Keep you pet get feeded - Stamia: [' + stamina.text().split('/')[0] + ']')
                    this.clickToBuyFood()
                    this.buyFoodItemFromShop()
                    this.clickGoHomeButton()
                    this.feedThePet(primaryPet, fuckPet, email)
                    this.feedThenFightUntillMaxStamina(primaryPet, fuckPet, email)
                } else {
                    slackNotification.sendMsgToSlackAndTelegram('Max Stamina - pet: ' + primaryPet + ' for email: ' + email)
                }
            })
        })
    }


    selectPetToAutoFeedAndFight(numberOfPets, fuckPet, dificultLevel, email) {
        for (let i = 0; i < numberOfPets; i++) {
            cy.log('i = ' + i)
            if (i !== (fuckPet - 1)) { // check is that fuckPet
                this.feedThenFightUntillLimit(i + 1, fuckPet, dificultLevel, email)
            }
        }
    }

    feedThenFightUntillLimit(primaryPet, fuckPet, dificultLevel, email) {
        let result = false;
        this.selectPet(primaryPet).then(() => {
            foodStorePO.getElementPetStamina().then((stamina) => {
                cy.log('PRIMARY PET STAMINA: [' + stamina.text() + ']')
                if (stamina.text().split('/')[0] < 1) {
                    cy.log('Keep you pet get feeded - Stamia: [' + stamina.text().split('/')[0] + ']')
                    this.clickToBuyFood();
                    this.buyFoodItemFromShop();
                    this.clickGoHomeButton();
                    this.feedThePet(primaryPet, fuckPet, email);
                    this.feedThenFightUntillLimit(primaryPet, fuckPet, dificultLevel = dificultLevel, email = email);
                } else {
                    slackNotification.sendMsgToSlackAndTelegram('Go to fight - pet: ' + primaryPet + ' for email: ' + email)
                    homePagePA.selectBattleField();
                    battleFieldPA.changePetToFight(primaryPet);
                    cy.wait(6000).then(() => {
                        battleFieldPA.selectEnemies(dificultLevel);
                    }).then(() => {


                        // cy.fixture(jsonFile).then((petkingdom) => {
                        // slackNotification.sendMsgToSlackAndTelegram('Reach limit pet: ' + primaryPet + ' for email: ' + email)
                        // })

                        cy.wait(1000).then(async function () {
                            if (battleFieldPA.fightEnemyAndCheckLimit(email)) {
                                cy.log('return True feedThenFightUntillLimit ')
                                result = true
                            } else {
                                homePagePA.selectFoodStoreDirectly();
                                // if (!result) {
                                cy.log('false goi tiep ')
                                foodStorePA.feedThenFightUntillLimit(primaryPet, fuckPet, dificultLevel, email)
                            }
                        })
                    })

                };
            });
        }).then(() => {
            cy.log('return True feedThenFightUntillLimit ' + result);
            return result;
        });

    };


    autofarm(primaryPet, fuckPet, dificultLevel, email, numberOfPets, autoFarm, world) {
        if (!autoFarm) {
            slackNotification.sendMsgToSlackAndTelegram('Start game for email: ' + email + ' - select world: ' + world);
            this.feedThePetTo100(primaryPet, fuckPet, dificultLevel, email);
        } else {
            slackNotification.sendMsgToSlackAndTelegram('Start game: All pets reached daily limit - Go feed them till 100 stamina ' + email + ' - select world: ' + world);
            this.selectPetToRun(numberOfPets, fuckPet, email);
        }
    }


    autofarm1(primaryPet, fuckPet, dificultLevel, email, numberOfPets, autoFarm, world) {
        if (!autoFarm) {
            slackNotification.sendMsgToSlackAndTelegram('Start game for email: ' + email + ' - select world: ' + world);
            this.selectPetToAutoFeedAndFight(numberOfPets, fuckPet, dificultLevel, email);
        } else {
            slackNotification.sendMsgToSlackAndTelegram('Start game: All pets reached daily limit - Go feed them till 100 stamina ' + email + ' - select world: ' + world);
            this.selectPetToRun(numberOfPets, fuckPet, email);
        }
    }

}
export const foodStorePA = new FoodStorePA()
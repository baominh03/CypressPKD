/// <reference types="Cypress" />

export class BattleFieldPO {

    getElementChangePet() {
        return cy.get('.hero-action__change', { timeout: 10000 })
    }

    getElementSelectButton() {
        return cy.get('.hero-select', { timeout: 10000 })
    }

    getElementAcceptButtonAtPetSelection() {
        return cy.get(this.getElementAcceptButtonAtPetSelectionString(), { timeout: 10000 })
    }

    getElementAcceptButtonAtPetSelectionString() {
        return '.switch-dialog__btn'
    }

    getElementPopupSelectPet() {
        return cy.get('.modal-content', { timeout: 10000 })
    }

    getElementEnemies() {
        return cy.get(this.getElementEnemiesString(), { timeout: 10000 })
    }

    getElementEnemiesString() {
        return '.enemies .enemy-item__content'
    }

    getElementCurrentLevelEnemies() {
        return cy.get('.enemy-current .skull span', { timeout: 10000 })
    }

    getElementCurrentFightButton() {
        return cy.get(this.getElementCurrentFightButtonString(), { timeout: 10000 })
    }

    getElementCurrentFightButtonString() {
        return '.enemy-current .combat'
    }

    getElementCurrentEnemy() {
        return cy.get('.enemy-current .enemy-item', { timeout: 10000 })
    }

    getElementAcceptButtonOnResultDialog() {
        return cy.get('.combat-dialog__close', { timeout: 20000 })
    }

    getElementAcceptButtonOnAlertDialog() {
        return cy.get('.action__accept', { timeout: 10000 })
    }

    getElementWinDialog() {
        return cy.get('.modal-content', { timeout: 20000 })
    }

    getElementWinDialogString() {
        return '.combat-dialog__result'
    }

    getElementAlertDialog() {
        return cy.get(this.getElementAlertDialogString(), { timeout: 20000 }) 
    }

    getElementAlertDialogString() {
        return '.attention-dialog__content'
    }


    
}
export const battleFieldPO = new BattleFieldPO()
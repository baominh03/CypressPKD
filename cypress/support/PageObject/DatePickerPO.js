/// <reference types="Cypress" />

export class DatePickerPO {
    getElementFormCommonDatePicker() {
        return cy.contains('Common Datepicker').parent('nb-card').find('.size-medium')
    }

    getElementYearSelection() {
        return cy.get('nb-calendar-navigation').find('.appearance-filled')
    }

    getElementYearNumber() {
        return cy.get('nb-calendar-year-cell')
    }

    getElementArrowPreviousYear() {
        return cy.get('nb-card-body').find('nb-calendar-pageable-navigation g [data-name="chevron-left"]')
    }

    getElementArrowNextYear() {
        return cy.get('nb-card-body').find('nb-calendar-pageable-navigation g [data-name="chevron-right"]')
    }

    getElementMonthNumber() {
        return cy.get('nb-calendar-month-cell')
    }

    getElementDayNumber() {
        return cy.get('[class="day-cell ng-star-inserted"]')
    }


}

export const datePickerPO = new DatePickerPO()
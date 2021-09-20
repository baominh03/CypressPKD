/// <reference types="Cypress" />
import { DatePickerPO, datePickerPO } from "../PageObject/DatePickerPO"

export class DatePickerPA {

    randomTime = ''

    hitCommonDatePickerForm() {
        datePickerPO.getElementFormCommonDatePicker().click()
    }

    hitYearSelection() {
        datePickerPO.getElementYearSelection().click()
    }

    randomDate() {
        let time;
        //set a range of years
        let min = new Date().getFullYear() - 50
        let max = new Date().getFullYear() + 50

        // Math.ceil prevents the value from being 0;
        let month = Math.ceil(Math.random() * 12)
        let day = Math.ceil(Math.random() * 28)
        let year = Math.floor(Math.random() * (max - min) + min)

        //this ensures that the format will stay mm/dd/yyyy;
        if (month < 10) {
            month = "0" + month
        }
        if (day < 10) {
            day = "0" + day
        }
        //concatenates random dob in mm/dd/yyyy format;
        time = year + '-' + month + '-' + day

        cy.log('random time is: ' + time)
        return time;
    }


    hitPreviousYear() {
        datePickerPO.getElementArrowPreviousYear().click()
        cy.log('Clicked previous Year')
    }

    hitNextYear() {
        datePickerPO.getElementArrowNextYear().click()
        cy.log('Clicked next Year')
    }

    logicYearSelection(year) {
        datePickerPO.getElementYearNumber().first().invoke('text').then(firstYear => {
            if (year < firstYear) {
                cy.log('Check logic year selection: [' + year + '] < ' + firstYear)
                this.hitPreviousYear()
                this.logicYearSelection(year)
            } else {
                datePickerPO.getElementYearNumber().last().invoke('text').then(lastYear => {
                    if (firstYear <= year && year <= lastYear) {
                        cy.log('TRUE: ' + firstYear + ' <= [' + year + '] <= ' + lastYear)
                        datePickerPO.getElementYearNumber().contains(year).click()
                        cy.log('Selected year: ' + year)
                    } else if (year > lastYear) {
                        cy.log('Check logic year selection: [' + year + '] > ' + lastYear)
                        this.hitNextYear()
                        this.logicYearSelection(year)
                    }
                })
            }
        })
    }

    monthSelection(month) {
        datePickerPO.getElementMonthNumber().contains(month).click()
        cy.log('Selected month: ' + month)
    }

    daySelection(date) {
        datePickerPO.getElementDayNumber().contains(date).click()
        cy.log('Selected month: ' + date)
    }


    selectYearMonthDateExceptToday() {
        let time = new Date(this.randomDate())
        let date = time.getDate()
        let month = time.toLocaleString('default', { month: 'short' }).toString()
        let year = time.getFullYear()

        this.hitYearSelection()
        this.logicYearSelection(year)
        this.monthSelection(month)
        this.daySelection(date)
        this.randomTime = month + ' ' + date + ', ' + year
    }

    verifyPlaceHolderCommonDatePickerAfterSelecting() {
        datePickerPO.getElementFormCommonDatePicker().invoke('prop', 'value').should('equal', this.randomTime)
    }

}

export const datePickerPA = new DatePickerPA()
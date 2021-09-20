/// <reference types="Cypress" />
import { homePagePA } from "../support/PageAction/HomePagePA"
import { formLayoutPA } from "../support/PageAction/FormLayoutPA"
import { datePickerPA } from "../support/PageAction/DatePickerPA"


describe('first suite: form layout', () => {

    it('Step 1 navigate to Form Layout menu', () => {
        homePagePA.navigateToFromLayouts()
    })

    it('Step 2 input email pass', () => {
        formLayoutPA.inputEmailPassOnUsingGrid()
    })

    it('Step 3 hit sign in', () => {
        formLayoutPA.hitSignInButtonOnUsingGrid()
    })


})

describe('Date picker', () => {

    it('Step 1 navigate to DatePicker menu', () => {
        homePagePA.navigateToDatePicker()
    })

    it('Step 2 hit on Common datepicker form', () => {
        datePickerPA.hitCommonDatePickerForm()
    })

    it('Step 3 Select random date except today', () => {
        datePickerPA.selectYearMonthDateExceptToday()
    })

    it('Step 4 Verify time placeholder on Common Datepicker after selecting ', () => {
        datePickerPA.verifyPlaceHolderCommonDatePickerAfterSelecting()
    })


})
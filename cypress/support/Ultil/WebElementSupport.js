/// <reference types="Cypress" />



export class WebElementSupport {


    // checkIfEleExists(element) {
    //     return new Promise((resolve, reject) => {
    //         /// here if  ele exists or not
    //         cy.get('body').find(element, { timeout: 20000 }).its('length').then(res => {
    //             if (res > 0) {
    //                 return true
    //                 resolve();
    //             } else {
    //                 return false
    //                 resolve();
    //             }
    //             reject();
    //         });
    //     })
    // }


    checkElementExist(element, timeoutInSecond = 1) {
        let found = false;
        let count = 0;
        let result = false
        while(!found) {
            let nonExistent = Cypress.$(element)
            if (!nonExistent.length) {
                found = false;
                count = count + 1;
                cy.wait(1000, { log: false });
                if (count == timeoutInSecond) {
                    found = true;
                    cy.log('Element not found after [' + timeoutInSecond + '] seconds..Exit from loop!!!');
                }
            } else {
                found = true;
                result = true
            } cy.log('check Element Exist [' + result + ']');
        }
        return result
    }

    // checkElementExist(elString) {
 
    //     let $nonExistent = Cypress.$(elString)
    //     if (!$nonExistent.length) {
    //         cy.log('Element Not Exist');
    //         return false
    //     } else {
    //         cy.log('Element Exist');
    //         return true
    //     }


    // }

    // waitElementExist(elString, timeoutInMs = 10000) {
    //     cy.wait(timeoutInMs).then(() => {
    //         return this.checkElementExist(elString)
    //     })
    // }

    // checkElementExist(fieldName) {
    //     const jquerySelector = `.view-and-field-name:contains(${fieldName})`;
    //     return Cypress.$(jquerySelector);
    //   }

    // checkElementExist(elString) {
    //     let result = false
    //     try {
    //         cy.get(elString).then(($el) => {
    //             result = Cypress.dom.isVisible($el)
    //             debugger
    //         }).then(() => {
    //             cy.log('check Element Exist ['+ result +']');
    //         })
    //     } catch (error) {
    //         result = false
    //         cy.log('Element Not Exist');
    //     }
    //     return Boolean(result)

    // }
}
export const webElementSupport = new WebElementSupport()
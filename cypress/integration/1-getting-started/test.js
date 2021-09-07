// <reference types="cypress" />

describe("Test Suit", function () {
    it("Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check()
        cy.get('#checkBoxOption1').uncheck()
        cy.get('#checkBoxOption1').should('not.be.checked')
    })
})
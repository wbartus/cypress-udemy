// <reference types="cypress" />

describe("Test Suit", function () {
    it("Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //popups
        cy.get('#alertbtn').click()
        cy.on(('window:alert'), str => {
            expect(str).equal('Hello , share this practice page and share your knowledge')

        })
        cy.get('#confirmbtn').click()
        cy.on(('window:confirm'), str => {
            expect(str).equal('Hello , Are you sure you want to confirm?')

        })
    })
})
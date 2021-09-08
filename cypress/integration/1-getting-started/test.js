// <reference types="cypress" />

describe("Test Suit", function () {
    it("Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Checkbox
        cy.get('#checkBoxOption1').check()
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //Static dropdown
        cy.get('select').select('option3').should('have.value', 'option3')

        //Dynamic dropdowm
        cy.get('#autocomplete').type('ind').get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text()=='India') {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    })
})
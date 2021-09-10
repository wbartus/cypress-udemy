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

        //Visibility
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio
        cy.get('[value="radio2"').check()
        cy.get('[value="radio2"').should('be.checked')

    })
})
describe('React Test', () => {
it('renders the page successfully' , () =>{
cy.visit('http://localhost:3003')
cy.contains('User Registration')
})
it('can make username', () => {
    cy.visit('http://localhost:3003')
    cy.get("input[name=username]").type('RobertM123{enter}')
    cy.get("input[name=username]").should('have.value', 'RobertM123')
})
it('can check the agreement', () => {
    cy.visit('http://localhost:3003')
    cy.get('[type="checkbox"]').click()
})
it('can select my fav food :)', () => {
    cy.visit('http://localhost:3003')
    cy.get('select').select("Spaghetti")
})
it('can select through the radio system', () => {
    cy.visit('http://localhost:3003')
    cy.get('[type="radio"][value="javascript"]').click()
})
})

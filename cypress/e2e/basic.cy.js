describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h2')
    .contains('WELCOME TO FEMONIC BRIDGEPOINT FINANCIAL SERVICES')
.should('have.css', 'color', 'rgb(0, 0, 0)');
  })
}) 

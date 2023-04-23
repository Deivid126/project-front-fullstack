describe('UserPage', () => {
  it('Displays user information and products when a valid id is entered', () => {
    cy.visit('http://localhost:3000/');


    cy.get('input').type('1');


    cy.get('table')
      .should('be.visible')
      .contains('Nome: john doe')
    
    cy.get('.MuiTableHead-root > :nth-child(1) > :nth-child(2)')
    .contains('E-mail: john@gmail.com')

    cy.get('table tbody tr')
    .should('have.length', 6)

    cy.get('table tbody tr:nth-child(1)')
    .contains('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)')
    .contains('Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday')
      

    cy.get(':nth-child(1) > .MuiTableCell-alignRight')
    .contains('109.95')

    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(3)')
    .contains("men's clothing")
  });

});
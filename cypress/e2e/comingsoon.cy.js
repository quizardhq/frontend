describe('Website', () => {
  it('Visits the Website', () => {
    cy.viewport('macbook-15');
    cy.visit('/');
    cy.get('h1').first().should(($p) => {
      expect($p).to.contain('Engage & Interact');
    })
  });
});

describe('test1', () => {
  it('test amazon', () => {
    cy.visit('amazon.in');
    cy.get('Button').click()
  });
});

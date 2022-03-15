describe('Saving sleep score', () => {
  it('return the calculated sleep score and a success message', () => {
    const sleepScore = '80';
    const successMessage = 'Sleep Score Saved!';

    cy.server({ force404: true });

    cy.route({
      method: 'GET',
      url: 'https://localhost:4002/sleep-score/save',
      response: {
        status: 200,
        sleepScore: 84,
        status_message: 'Sleep Score Saved!',
      },
    });

    cy.visit('/');
    cy.get('#in-bed-select').select('5 hours').should('have.value', '10');
    cy.get('#asleep-select').select('4 hours').should('have.value', '8');
    cy.contains(sleepScore);
  });
});

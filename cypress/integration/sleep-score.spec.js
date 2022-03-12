describe('Saving sleep score', () => {
  it('return the calculated sleep score and a success message', () => {
    const sleepScore = '84';
    const successMessage = 'Sleep Score Saved!';

    cy.server({ force404: true });

    cy.route({
      method: 'GET',
      url: 'https://localhost:4002/sleep-score/save',
      response: {
        status: 200,
        status_message: 'Sleep Score Saved!',
      },
    });

    cy.visit('/sleep-score/save');
    cy.contains(sleepScore);
    cy.contains(successMessage);
  });
});

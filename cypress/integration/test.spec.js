describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("localhost:3000");
    cy.get('h1').contains('Test')
  });
});

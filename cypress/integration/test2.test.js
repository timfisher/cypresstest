describe("Test 2", () => {
  it("Does not do much!", () => {
    cy.visit("localhost:3000");
    cy.get("h1").contains("Change");
    cy.percySnapshot();
  });
});

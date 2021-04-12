describe("Test 1", () => {
  it("Does not do much!", () => {
    cy.visit("localhost:3000");
    cy.get("h1").contains("Change");
    cy.percySnapshot();
  });
});

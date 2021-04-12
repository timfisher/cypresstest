describe("Test 2", () => {
  it("Does not do much!", () => {
    cy.visit("localhost:3000");
    cy.wait(50000);
    cy.get("h1").contains("Change");
    cy.percySnapshot();
  });
});

describe("Test 3", () => {
  it("Does not do much!", () => {
    cy.visit("localhost:3000");
    cy.wait(500);
    cy.get("h1").contains("Change");
    cy.percySnapshot();
  });
});

describe("Test 4", () => {
  it("Does not do much!", () => {
    cy.visit("localhost:3000");
    cy.wait(500);
    cy.get("h1").contains("Change");
    cy.percySnapshot();
  });
});

describe("Test 5", () => {
  it("Does not do much!", () => {
    cy.visit("localhost:3000");
    cy.wait(500);
    cy.get("h1").contains("Change");
    cy.percySnapshot();
  });
});

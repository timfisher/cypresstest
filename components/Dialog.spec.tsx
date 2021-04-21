import * as React from "react";
import { mount } from "@cypress/react";
import Dialog from "./Dialog";

it("Button", () => {
  mount(<Dialog>Test dialog</Dialog>);
  cy.findByRole("button", { name: "important dialog" })
    .contains("Test dialog")
    .click();
  cy.percySnapshot();
});

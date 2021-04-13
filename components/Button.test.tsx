import * as React from "react";
import { mount } from "@cypress/react";
import Button from "./Button";

it("Button", () => {
  mount(<Button>Test button</Button>);
  cy.findByRole("button", { name: "important button" })
    .contains("Test button")
    .click();
  cy.percySnapshot();
});

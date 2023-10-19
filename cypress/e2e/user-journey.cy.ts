//@ts-nocheck 

describe("User Journey", () => {  
    it('a user clicks on the first exchange and gets redirected to its details then redirected back when "Back to Main Page" button is clicked', () => {
      cy.visit(Cypress.config().baseUrl);
      cy.get("li").first().click();
      cy.url().should("include", "/exchanges/");
      cy.get('button[type="button"]').click();
      cy.location('origin').should("equal", Cypress.config().baseUrl);
    });
  });
  
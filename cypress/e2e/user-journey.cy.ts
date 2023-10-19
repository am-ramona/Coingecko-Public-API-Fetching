describe("User Journey", () => {  
    it('redirects the user to the exchange details when the first exchange is clicked then redirects back when "Back to Main Page" button is clicked', () => {
      cy.visit(Cypress.config().baseUrl);
      cy.get("li").first().click();
      cy.url().should("include", "/exchanges/").as("url");
      cy.get('button[type="button"]').click();
      cy.location('origin').should("equal", Cypress.config().baseUrl)//.url().should("eq", Cypress.config().baseUrl);
    });
  });
  
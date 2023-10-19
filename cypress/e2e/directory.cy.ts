describe("Crypto Exchanges Directory", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.request(
      "https://api.coingecko.com/api/v3/exchanges?per_page=10&x_cg_demo_api_key=CG-kbvAdBD7HbiG2LMiXV7upNFb",
    ).as("exchangesList");
  });

  context("Titles section", () => {
    it("the titles are correct", () => {
      cy.get("main span").eq(0).contains("Name");
      cy.get("main span").eq(1).contains("Country");
      cy.get("main span").eq(2).contains("Url");
      cy.get("main span").eq(3).contains("Logo");
      cy.get("main span").eq(4).contains("Trust rank");
    });
  });

  context("Exchanges' list section", () => {
    it("the exchanges List is limited to 10", () => {
      cy.get("@exchangesList").should((response) => {
        expect(response.body).to.have.length(10);
      });
    });

    it("the user is redirected to the exchange details page when the first exchange is clicked", () => {
      cy.get("li").first().click();
      cy.url().should("include", "/exchanges/").as("url");
    });
  });
});

/**Handling cookies pop-up */
Cypress.Commands.add("saveCookies", () => {
  cy.getCookies().then((cookies) => {
    cy.writeFile("cypress/fixtures/cookies.json", cookies);
  });
});

Cypress.Commands.add("acceptCookies", () => {
  cy.get("reddit-cookie-banner", { includeShadowDom: true })
    .find("faceplate-dialog", { includeShadowDom: true })
    .find("#accept-all-cookies-button")
    .click();
});

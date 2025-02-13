class RedditLoginPage {
  
  /** Opens the Login Modal */
  openLoginModal() {
    cy.get("reddit-header-large", { includeShadowDom: true })
      .find("faceplate-tooltip", { includeShadowDom: true })
      .should("exist");

    cy.get("#login-button")
      .should("be.visible")
      .click();

    cy.log("Login modal opened successfully.");
  }

  /** Performs login with username and password */
  login(username, password) {
    this.openLoginModal();

    cy.get('auth-flow-modal[pagename="login_username_and_password"]', { includeShadowDom: true })
      .should("exist")
      .within(() => {
        cy.get("faceplate-text-input", { includeShadowDom: true })
          .find('input[name="username"]')
          .should("be.visible")
          .click().wait(500)
          .type(username, { delay: 200 });

        cy.get("faceplate-text-input", { includeShadowDom: true })
          .find('input[name="password"]')
          .should("be.visible")
          .click().wait(500)
          .type(password, { delay: 200 });

        cy.get('div[slot="primaryButton"] faceplate-tracker button.login')
          .should("be.visible")
          .click().wait(500);
          cy.wait(3000);
      });

    cy.log("User login attempted.");
  }
}

export default new RedditLoginPage();

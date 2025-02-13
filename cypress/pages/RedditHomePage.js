class RedditHomePage {
  visit() {
    cy.clearCookies();
    cy.clearLocalStorage();

    // Visit Reddit with headers and experimental options
    cy.visit("/", {
      experimentalSessionAndOrigin: true,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    cy.get('body', { timeout: 10000 }).should('be.visible');

    // Accept cookies and save session cookies
    cy.acceptCookies();
    cy.saveCookies();
  }

  /**Search for subreddit (gaming) */
  searchSubreddit(subreddit) {

    cy.get('reddit-search-large')
      .shadow()
      .find('#search-input')
      .shadow()
      .find('input[placeholder="Search Reddit"]')
      .type(`${subreddit}{enter}`);
    cy.wait(2000);

    cy.get('search-dynamic-id-cache-controller', { includeShadowDom: true })
      .find('faceplate-tabgroup', { includeShadowDom: true })
      .find('#search-results-page-tab-communities')
      .click();
    cy.wait(2000);

    // Wait for the subreddit link to become visible before clicking
    cy.get('search-dynamic-id-cache-controller', { includeShadowDom: true })
      .find(`div[data-testid="search-community"] a[href="/r/${subreddit}/"]`)
      .should('be.visible', { timeout: 10000 })
      .click();
  }
}

export default new RedditHomePage();

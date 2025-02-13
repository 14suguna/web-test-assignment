class RedditSubredditPage {

  /**Verify the URL for subreddit page */
  verifySubreddit(subreddit) {
    cy.url().should("include", `/r/${subreddit}`);
  }


/**Get the first post tilttle and print to console */
  getTopPostTitle() {
      cy.get('shreddit-feed', { includeShadowDom: true })
      .find(' shreddit-post', { includeShadowDom: true })
      .find('a[slot="title"]')
      .first().then(($el) => {
        const topPostTitle = $el.text();
      cy.log("Top Post Title: " + topPostTitle);
      console.log("Top Post Title:", topPostTitle);
    });
  }

}

export default new RedditSubredditPage();

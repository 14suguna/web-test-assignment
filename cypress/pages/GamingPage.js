class GamingPage {
  upVotePost() {
    cy.scrollTo('bottom', { duration: 5000 });

    /** Atleasr 10 Post are loaded */
    cy.get('shreddit-feed', { includeShadowDom: true })
      .find('article[class="w-full m-0"]', { timeout: 15000 })
      .should('have.length.greaterThan', 10)
      .as('posts');

    /**Checking second post for promotion & announcement to identify the valid post */
    cy.get('@posts').then(($posts) => {
      let validPost = null;
      for (let i = 1; i < $posts.length; i++) {
        cy.log("Inside for loop");
        const $post = Cypress.$($posts[i]);

        const postText = $post.text();

        if (!postText.includes("Promoted") && !postText.includes("Announcement")) {
          validPost = cy.wrap($posts[i]);
          break;
        }
      }

      /** Locate the post and toggle the vote*/

      if (validPost) {
        validPost.find('shreddit-post', { includeShadowDom: true })
          .should("exist") // Ensure post exists
          .shadow()
          .within(() => {
            cy.get('button[upvote]')
              .should("exist") // Ensure upvote button exists
              .invoke("attr", "aria-pressed")
              .then((isUpvoted) => {
                cy.log("Status of button: " + isUpvoted);

                if (isUpvoted === "true") {
                  cy.log("Post is upvoted, downvoting now.");
                  cy.get('button[downvote]').should('exist').then(($btn) => {
                      if ($btn.length > 0) {
                        cy.wrap($btn).click();
                      }
                    });

                  cy.get('button[downvote]')
                    .should('have.attr', 'aria-pressed', 'true', { timeout: 5000 })
                    .then(() => {
                      cy.log("Hey: downvoted");
                    });
                    

                } else {
                  cy.log("Post is not upvoted, upvoting now.");
                  cy.get('button[upvote]')
                    .should("exist")
                    .click({ force: true });

                  cy.get('button[upvote]')
                    .should('have.attr', 'aria-pressed', 'true')
                    .then(() => {
                      cy.log("Hey: upvoted");
                    });
                }
              });
          });
      } else {
        cy.log("No valid post found to interact with.");
      }
    });
  }
}

export default new GamingPage();

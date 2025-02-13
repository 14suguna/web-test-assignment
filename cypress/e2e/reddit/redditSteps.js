import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RedditHomePage from "../../pages/RedditHomePage";
import RedditSubredditPage from "../../pages/RedditSubredditPage";
import RedditLoginPage from "../../pages/RedditLoginPage";
import GamingPage from "../../pages/gamingPage";



// Visit Reddit Homepage
Given("I am on the Reddit homepage", () => {
  RedditHomePage.visit();
});

// Search for a subreddit
When("I search for the {string} subreddit", (subreddit) => {
  RedditHomePage.searchSubreddit(subreddit);
});

// Open subreddit and verify
When("I open the {string} subreddit", (subreddit) => {
  RedditSubredditPage.verifySubreddit(subreddit);
});

// Print the top post title
Then("I print the title of the top post", () => {
  RedditSubredditPage.getTopPostTitle();
});

// Log in with valid credentials
When("I log in with valid credentials", () => {
  RedditLoginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
});

//Check the secnd post and toggle vote
Then("I check the second post and toggle its vote unless it's an advertisement or announcement", function () {
  GamingPage.upVotePost();
});

afterEach(() => {
  cy.window().then((win) => {
      win.document.querySelector('.some-class')?.removeEventListener('click', someHandler);
  });
});

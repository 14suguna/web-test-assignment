Feature: Reddit Subreddit Interaction

  Scenario: Search and interact with the gaming subreddit
    Given I am on the Reddit homepage
    When I search for the "gaming" subreddit
    And I open the "gaming" subreddit
    Then I print the title of the top post
    When I log in with valid credentials
   Then I check the second post and toggle its vote unless it's an advertisement or announcement

# Cypress Automation - Reddit Test Suite

This repository contains an automated test suite using **Cypress** to validate key functionalities on Reddit.

## Assignment Overview
This project automates a few key user interactions on Reddit as part of an assessment.

## Test Scenarios Implemented
- Open [Reddit](https://www.reddit.com/)
- Search for the **"gaming"** subreddit
- Open the subreddit
- Print the title of the top-most post
- Perform a login
- Downvote the second post if it is already upvoted, otherwise upvote it (if the second post is an ad, use the third)

## Project Structure
```
cypress/
│── e2e/
│   ├── reddit.feature
│   ├── RedditHomePage.js
│   ├── RedditLoginPage.js
│   ├── RedditSubredditPage.js
│   ├── GamingPage.js
│── screenshots/
│── support/
│── .gitignore
│── cypress.config.js
│── cypress.env.json
│── package.json
│── package-lock.json
```

## How to Run the Tests
### Setup
- Clone the repository:
  ```sh
  git clone https://github.com/yourusername/reddit-cypress-test.git
  cd reddit-cypress-test
  ```
- Install dependencies:
  ```sh
  npm install
  ```

### Running the Tests
#### Option 1: Cypress Test Runner (UI Mode)
```sh
npx cypress open
```
- Click on `reddit.feature` or any test file to run in a browser.

#### Option 2: Run Tests in Headless Mode
```sh
npx cypress run
```

## Technologies Used
- **Cypress** - End-to-End Testing Framework
- **JavaScript** - Scripting Language
- **Cucumber** - For BDD-style testing

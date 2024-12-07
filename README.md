# Playwright Exercise

## Description
Training playwright e2e and api automation skills with dummy website and dummy endpoint. This project uses eslint to keep code clean to read.

## Motivation
I've created this exercise to improve and train my skills with `Playwright`, using a well known dummy website and endpoint to do basic things on frontend or create some basic requests that can possibly be used on another website or scenarios.

## Credentials
You can get your credentials for API testing in this site [restful-booker](https://restful-booker.herokuapp.com/apidoc/index.html#api-Auth-CreateToken). This is just a dummy site to practice automation skills.

## Cloning and running the project
- You must have git installed and configured correctly
- Run in your terminal
    ```sh
    git clone git@github.com:armindojr/playwright-exercise.git
    ```
- Open the project folder
- Run in your terminal
    ```sh
    npm i
    ```
- Make a copy of `.envexample`, add credentials and rename this file to `.env`
- Run in your terminal
    ```sh
    npm run test
    ```

Or if you want a visual feedback:
- Run in your terminal
    ```sh
    npm run test:ui
    ```
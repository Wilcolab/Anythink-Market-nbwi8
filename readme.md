# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

# Setup steps
1. Install Docker (https://docs.docker.com/get-docker/)
2. You can verify if docker has been installed by running the following commands
    1. `docker -v`
    2. `docker -compose -v`
3. While in the project directory, type `docker -compose up`, this should spin up the frontend (http://localhost:3001) and the backend (http://localhost:3000)
4. To verify if docker backend successfully spun up the project, navigate to `http://localhost:3000/api/ping` on your web browser.
5. Correspondingly for the frontend navigate to `http://localhost:3001/register`. You should be able to create a new user and log in.

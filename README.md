# **React Redux Starter** #
[![codecov](https://codecov.io/bb/n3wnormal-dev/react-redux-starter/branch/master/graph/badge.svg?token=JWlZF6uKvM)](https://codecov.io/bb/n3wnormal-dev/react-redux-starter)

### **Wiki** ###

Starter support a list of features and integrations. Learn how to add them to your project inside starter's [Wiki](https://bitbucket.org/n3wnormal-dev/react-redux-starter/wiki/Home).

### **Commands** ###

### `yarn start`

Starts a local development server. Doesn't produce any compiled bundle. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

*Any of described below flows creates a `build` directory according to specific build flow:*

### `yarn build:develop`

Builds the app for development to the `build` folder.

Makes development build of your app based on `.env.develop` (if exists) with custom development environment variables.

### `yarn build:staging`

Builds the app for staging to the `build` folder.

Makes staging build of your app based on `.env.staging` (if exists) with custom staging environment variables.

### `yarn build`

Builds the app for production to the `build` folder.

Makes production build of your app based on `.env.production` (if exists) with custom production environment variables.

### `yarn test`

Runs the test watcher in an interactive mode.

By default, runs tests related to files changed since the last commit.

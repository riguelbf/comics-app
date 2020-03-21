## Build status:

 **[CircleCI](https://app.circleci.com/pipelines/github/riguelbf/comics-app)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/b47b1a89-2989-48fe-8048-c279ae326c79/deploy-status)](https://app.netlify.com/sites/silly-hermann-a6437e/deploys)

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/riguelbf/comics-app/master?style=for-the-badge)

![CircleCI](https://img.shields.io/circleci/build/gh/riguelbf/comics-app/master?style=for-the-badge)

![GitHub All Releases](https://img.shields.io/github/downloads/riguelbf/comics-app/total?style=for-the-badge)

[Website application (demo)](https://silly-hermann-a6437e.netlify.com/)


## Tech Stack
- React JS
- [Styled component](https://styled-components.com/docs)
- [Testing library for React JS](https://testing-library.com/docs/react-testing-library/intro)
- [React Toast notification](https://jossmac.github.io/react-toast-notifications/)
- [Redux Sagas](https://redux-saga.js.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Unform (library to build forms)](https://unform.dev/guides/basic-form))
- [Axios](https://github.com/axios/axios)
- [Axios mock](https://github.com/ctimmerm/axios-mock-adapter#readme)
- [PropTypes](https://github.com/facebook/prop-types)
- [React Icons](https://react-icons.netlify.com/#/)
- [React loader spinner](https://github.com/mhnpd/react-loader-spinner)
- [React App Rewired](https://github.com/timarney/react-app-rewired)
- [Netlify cli to deploy](https://github.com/netlify/cli)


## IMPORTANT
Is necessary the use of API key that is available from [Marvel API](https://developer.marvel.com/documentation/authorization).

## Environment variables or Local storage key
It is necessary for the correct functioning of the application!

```javascript
environment variable:
REACT_APP_API_KEY

local storage key:
COMICS_API_KEY

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn test-coverge`

To generate a coverage report about the tests

### `yarn netlify-deploy`

To do deploy app from netlify-cli(is dependency of project)

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### Develop by Riguel Figueiró

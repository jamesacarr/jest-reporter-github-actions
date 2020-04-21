# Jest Reporter for GitHub Actions

[![Test status](https://github.com/jamesacarr/jest-reporter-github-actions/workflows/tests/badge.svg)](https://github.com/jamesacarr/jest-reporter-github-actions/actions?query=workflow%3Atests)

A custom reporter for Jest that creates annotations when run via GitHub Actions

## Installation

```sh
npm install -D @jamesacarr/jest-reporter-github-actions
```

Or, event better:

```sh
yarn add -D @jamesacarr/jest-reporter-github-actions
```

## Usage

To get annotations working in your GitHub Actions runs, you need to setup Jest to use this reporter. You can do that by adding the following to your `jest.config.js`:

```js
module.exports = {
  reporters: [
    'default',
    '@jamesacarr/jest-reporter-github-actions'
  ],
  testLocationInResults: true,
}
```

Or, you can simply run Jest with the following options:

```sh
jest --testLocationInResults --reporters=default --reporter=@jamesacarr/jest-reporter-github-actions
```

# Jest Reporter for GitHub Actions

[![Test status](https://github.com/jamesacarr/jest-reporter-github-actions/workflows/tests/badge.svg)](https://github.com/jamesacarr/jest-reporter-github-actions/actions?query=workflow%3Atests)
[![NPM badge](https://img.shields.io/npm/v/@jamesacarr/jest-reporter-github-actions.svg)](https://www.npmjs.com/package/@jamesacarr/jest-reporter-github-actions)

A custom reporter for Jest that creates annotations when run via GitHub Actions

## Installation

```sh
npm install -D @jamesacarr/jest-reporter-github-actions
```

Or, even better:

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
jest --testLocationInResults --reporters=default --reporters=@jamesacarr/jest-reporter-github-actions
```

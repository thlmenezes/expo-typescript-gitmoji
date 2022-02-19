#  Grocery Price Watch

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Test Coverage
![](./__badges__/badge-branches.svg)
![](./__badges__/badge-functions.svg)
![](./__badges__/badge-lines.svg)
![](./__badges__/badge-statements.svg)

## [Changelog](./CHANGELOG.md)

To create a new release follow this [workflow](https://docs.gitmoji-changelog.dev/#/?id=workflow)

## Troubleshooting

- If `yarn changelog` shows the following error:
  ```bash
  /home/.../.npm/_npx/4f934f42ed15c671/node_modules/.bin/gitmoji-changelog: linha 1: erro de sintaxe próximo ao token inesperado `('
  /home/.../.npm/_npx/4f934f42ed15c671/node_modules/.bin/gitmoji-changelog: linha 1: `const semver = require('semver')'
  error Command failed with exit code 2.
  info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
  ```
  - try to install the package globally first and then try again
  ```bash
  npm i -g gitmoji-changelog
  ```
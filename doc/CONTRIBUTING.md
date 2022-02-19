<h1 align="center">CONTRIBUTING</h1>

This project consists of a [Typescript](https://www.typescriptlang.org/) [Expo](https://expo.dev/) app, with:
  - [**Gitmoji**](https://gitmoji.dev/) style commits
  - [**Jest**](https://jestjs.io/) + [**@testing-library/react-native**](https://testing-library.com/docs/react-native-testing-library/intro/)
  - [**Storybook**](https://storybook.js.org/)
  - [**styled-components**](https://styled-components.com/)
  - [**React Query**](https://react-query.tanstack.com/)
  - [**Reanimated2**](https://www.reanimated2.com/)

## Contents

- [Architectural Notes](#architectural-notes)
- [Code Quality Tools](#code-quality-tools)
- [Storybook](#storybook)


## Architectural Notes

- Components follow atomic design
- Update Storybook as the design system is updated
- Screens are split in a modular structure
- Keep test suite updated
- For animations use Reanimated2, don't sweat it
- React Query is beautiful, let's iterate on that
- To create a new release follow this [workflow](https://docs.gitmoji-changelog.dev/#/?id=workflow)
- Expect your code to be rejected per not following any of the instructions above.
  
## Code Quality Tools

- [**ESLint**](https://eslint.org/): find and fix problems in your JavaScript code
- [**Prettier**](https://prettier.io/): an opinionated code formatter, applied through eslint
- [**Commitlint**](https://commitlint.js.org/): lint commit messages according to a customized [**commitlint-config-gitmoji**](https://www.npmjs.com/package/commitlint-config-gitmoji)
- [**Commitzen**](https://commitizen-tools.github.io/commitizen/): define a standard way of committing rules (here [**cz-gitmoji**](https://github.com/Landish/cz-gitmoji)) and communicating it.
- [**lint-staged**](https://github.com/okonet/lint-staged#readme): improve *ESLint* performance on git hooks ([**Husky**](https://typicode.github.io/husky/#/)) by only targeting staged files.

## Storybook

To enable storybook it needs a little code patch in [App.tsx](./App.tsx):
```bash
echo 'export { default } from "./storybook";' > App.tsx
```
Remember to reset changes after using storybook.
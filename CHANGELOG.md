# Changelog

<a name="0.4.0"></a>
## 0.4.0 (2022-02-19)

Improvements:

- Improve API query hooks
- Jest for component testing
  - with @testing-library/react-native
- Test Coverage Badges


### Added

- ✅ use @testing-library/react-native [[7121800](https://github.com/thlmenezes/grocery-price-watch/commit/7121800bddc354da68091e6c40993fb06b361ec0)]
- ➕ @testing-library/{jest-native,react-native} [[1a98655](https://github.com/thlmenezes/grocery-price-watch/commit/1a986552fb8c6269450981a325d84d2b15dadd31)]
- ✅ App [[da4957d](https://github.com/thlmenezes/grocery-price-watch/commit/da4957db913bc2bcdba81c6d7b1af8c40c15b88d)]
- ➕ jest [[9b1685c](https://github.com/thlmenezes/grocery-price-watch/commit/9b1685ccf3d9a8821b38f31da8325119792c6e10)]
- ✨ removeUser impl removing from cache [[93469e4](https://github.com/thlmenezes/grocery-price-watch/commit/93469e4037cc4aee0d256298f3906f86f06d5ddc)]
- ✨ ♻️ improve useUsers [[8e88112](https://github.com/thlmenezes/grocery-price-watch/commit/8e881120d634ae45de0bb5b1ffce01ed872eba91)]
- ✨ useDefaultQuery [[77ba5b3](https://github.com/thlmenezes/grocery-price-watch/commit/77ba5b30f822b80ccad40e8eee906a9601b4555c)]
- ✨ ♻️ add queryClient as root util [[ec28c4d](https://github.com/thlmenezes/grocery-price-watch/commit/ec28c4d3dd4cccb0856799e8bf218deadde042cb)]

### Changed

- 🔧 additional test matchers [[776bce4](https://github.com/thlmenezes/grocery-price-watch/commit/776bce4a47a12b3dc7d1fd93367123e13c241f4c)]
- 🔧 jest [[24dae84](https://github.com/thlmenezes/grocery-price-watch/commit/24dae84237bcc6aebc3489342e7b6faf583da0f6)]
- 🔧 tsconfig for tests [[06c8248](https://github.com/thlmenezes/grocery-price-watch/commit/06c8248461567313fb634e38dc7c9a9698d696b7)]

### Miscellaneous

- 📝 add test badges [[3a9f540](https://github.com/thlmenezes/grocery-price-watch/commit/3a9f54029a7c2d806d7dd8293089ac62b42a8160)]
- 🙈 coverage [[fa6c997](https://github.com/thlmenezes/grocery-price-watch/commit/fa6c997ee5dfa8a1f5fe4096f5e273736cfd50bc)]
- 📝 💡 add FIXME [[1b221c3](https://github.com/thlmenezes/grocery-price-watch/commit/1b221c3a8bea4efe86d090dc56ea5b7b29603578)]


<a name="0.3.0"></a>
## 0.3.0 (2022-02-19)

Improved:
 - functionality with React Query and Reanimated
 - documentation with Storybook and Gitmoji changelog generation

### Added

- ➕ storybook [[2dc7793](https://github.com/thlmenezes/grocery-price-watch/commit/2dc77931daa5a19398c2ee6b236919de147c444b)]
- ✨ add CardList to UserList screen [[e7c3af5](https://github.com/thlmenezes/grocery-price-watch/commit/e7c3af58649b3977821d0dec3241d67b5ceb2512)]
- ✨ CardList organism [[e423ac0](https://github.com/thlmenezes/grocery-price-watch/commit/e423ac00e73514284f18263a9f866304ddc9bb9e)]
- ➕ react-native-reanimated [[9cfa741](https://github.com/thlmenezes/grocery-price-watch/commit/9cfa7414c49dd8302fba906a67e7b706c36c0a2d)]
- ✨ update UserList screen [[0d379be](https://github.com/thlmenezes/grocery-price-watch/commit/0d379be114827211adb591e1f3fe4ba33569ad60)]
- ✨ add avatar mock api [[bb705a7](https://github.com/thlmenezes/grocery-price-watch/commit/bb705a772b93bad7491f642c115a8d86ac997644)]
- ✨ add missing User module folders [[c1fda60](https://github.com/thlmenezes/grocery-price-watch/commit/c1fda606aa1c66adfb08184bb3741e52759e9041)]
- ✨ update User/hook module [[cf57e54](https://github.com/thlmenezes/grocery-price-watch/commit/cf57e5409f1513692df3b3a66a88217ba24d3c2a)]
- ✨ QueryClientProvider [[59d6e3a](https://github.com/thlmenezes/grocery-price-watch/commit/59d6e3ab6837d1ceafafc3b6a3148b83ada225b8)]
- ✨ useUsers [[ee529a2](https://github.com/thlmenezes/grocery-price-watch/commit/ee529a22c6edb87617a547e095745d25c1a5b7a2)]
- ➕ react query [[5625856](https://github.com/thlmenezes/grocery-price-watch/commit/562585612b0fa303789d2ff4623622bcca159281)]
- ✨ 🏷️ return data as User [[e57628c](https://github.com/thlmenezes/grocery-price-watch/commit/e57628c4049aed406dd3f05b77460d7edc2bb546)]
- ✨ 🏷️ use generic on handlerApiAsync [[09ce1b3](https://github.com/thlmenezes/grocery-price-watch/commit/09ce1b35adb211072620a579f906b90b13d01a17)]
- ✨ ♻️ modularize navigation props typing [[9ba4d44](https://github.com/thlmenezes/grocery-price-watch/commit/9ba4d446c8f4c87872d6a82acbbd6110665d5595)]
- ✨ add buttons to navigate between screens [[d02b868](https://github.com/thlmenezes/grocery-price-watch/commit/d02b86826cc9cbedbfa209f6be23f4cb5b7e4eca)]
- ✨ connect User routing to app routes [[7cbb626](https://github.com/thlmenezes/grocery-price-watch/commit/7cbb626171a71dbdc284db528e3cedf8b1ec69d2)]
- ✨ module User [[0e3fd0e](https://github.com/thlmenezes/grocery-price-watch/commit/0e3fd0ecf651c94175cd31b749dbc80feeb06322)]
- ✨ ⚰️ Home/{services,utils} [[1e0b0d7](https://github.com/thlmenezes/grocery-price-watch/commit/1e0b0d7438eaf493741762962b86a8d0301ecc3e)]

### Changed

- 💄 add vertical padding to container [[1e23241](https://github.com/thlmenezes/grocery-price-watch/commit/1e2324128e3bd20281cc25f72961eaf638d08f20)]
- 🔧 react-native-reanimated [[a490944](https://github.com/thlmenezes/grocery-price-watch/commit/a49094495238a930c2e1a5c5eace7094d18f0f0c)]
- 🚨 eslint fix all [[5793227](https://github.com/thlmenezes/grocery-price-watch/commit/57932270505ed538b22922250b7f04263d488bab)]
- 💄 padding-horizontal to padding [[effa418](https://github.com/thlmenezes/grocery-price-watch/commit/effa418e1c3736aab69b366653e54100a0613856)]

### Removed

- ➖ @storybook/react-native-server [[496db55](https://github.com/thlmenezes/grocery-price-watch/commit/496db555ba08a8c81028024095988181e3c14e48)]

### Fixed

- 🐛 minor errors and warnings [[abd2144](https://github.com/thlmenezes/grocery-price-watch/commit/abd21444b520a354e48076ef34d4b71bc0d627e5)]
- 🐛 eslint failed to import reanimated [[5b00428](https://github.com/thlmenezes/grocery-price-watch/commit/5b00428aa8e724b4b6148b0a053b2b820a106971)]
- 🐛 require cycle [[1a169ce](https://github.com/thlmenezes/grocery-price-watch/commit/1a169ced89bf8fd37ac811acd1d6f530dced0278)]
- 🐛 🏷️ response type [[b66d677](https://github.com/thlmenezes/grocery-price-watch/commit/b66d677595958846188c706a72524cc7609f4953)]
- 🐛 avoid name collision with parent navigator [[4c76c7a](https://github.com/thlmenezes/grocery-price-watch/commit/4c76c7a5aaee70fa40077b5d4a1b983d7e755700)]
- 🐛 userBase pointing to posts [[6995a45](https://github.com/thlmenezes/grocery-price-watch/commit/6995a456ad0d652e6c710f47e46e2eb0a2dfba6e)]

### Miscellaneous

- 📝 add release tagging workflow [[5934f81](https://github.com/thlmenezes/grocery-price-watch/commit/5934f812650468f51defd35af7bdc86e74120b66)]
- 📝 add CHANGELOG section [[7b6717e](https://github.com/thlmenezes/grocery-price-watch/commit/7b6717ee5ae6dd2380cbe926a688a85487f90237)]
- 📝 CHANGELOG [[5face56](https://github.com/thlmenezes/grocery-price-watch/commit/5face565bb535d85d42f20f332e7842a4d1b62e9)]
- 📝 add TROUBLESHOOTING section [[215e102](https://github.com/thlmenezes/grocery-price-watch/commit/215e102b9898e73d77e97f180dbc88721d626666)]
- 🔨 gitmoji-changelog [[4b6a402](https://github.com/thlmenezes/grocery-price-watch/commit/4b6a4020b4ea1a04a00360d564d4de915c80a69a)]
- 📝 add storybook start instructions [[8b26b79](https://github.com/thlmenezes/grocery-price-watch/commit/8b26b796bc9525a39a147d2bf2d0872d6d41e520)]
- 📦 js-&gt;ts stories [[c2ea333](https://github.com/thlmenezes/grocery-price-watch/commit/c2ea333de1602761d3df466c16a7eb1ce298a8ad)]
- 🔨 lint [[d66e84c](https://github.com/thlmenezes/grocery-price-watch/commit/d66e84cae69eccffb235cf6a3c96df918bc3c668)]


<a name="0.2.0"></a>
## 0.2.0 (2022-02-16)

Design new file structure, services, styling and babel fix...again
- modular file structure for screens,routes,utils,services
- atomic file structure for designing
- change almost every folder to a module, including assets
  - babel module resolving expects it
- add axios for API calls
- add styled-components
- create themes

### Added

- ✨ update Home [[748ebee](https://github.com/thlmenezes/grocery-price-watch/commit/748ebee3d4d10bc1bd80da32f1516f48cac6a460)]
- ✨ update Card [[9452bd6](https://github.com/thlmenezes/grocery-price-watch/commit/9452bd69ae1919d536ded4a72fd6847bbc4a7db7)]
- ✨ 🚚 create assets module [[6ca369e](https://github.com/thlmenezes/grocery-price-watch/commit/6ca369e2fb1fa8a3ded12ac860a1e4376c0b4edb)]
- ➕ styled components [[652ce78](https://github.com/thlmenezes/grocery-price-watch/commit/652ce78e148e941a226c93c880eafaffaae65bdf)]
- ✨ 🏗️ services architecture impl [[7b5e237](https://github.com/thlmenezes/grocery-price-watch/commit/7b5e2375da41ea792fc47204d3b6206ce21733b1)]
- ➕ axios [[19370c1](https://github.com/thlmenezes/grocery-price-watch/commit/19370c11d836be9ef32ddec554771332fc270e05)]
- ✨ update app routing [[9df44bd](https://github.com/thlmenezes/grocery-price-watch/commit/9df44bdf15e531c3b12717d13710d1690eea8b9e)]
- ✨ create Home module [[66621a9](https://github.com/thlmenezes/grocery-price-watch/commit/66621a9dd7eafe4ec643eca54079f91dc0b0091c)]

### Changed

- 💄 create atomic components [[0f28573](https://github.com/thlmenezes/grocery-price-watch/commit/0f28573aea72cf9fd5c7b406d3d942f350197b23)]
- 💄 enable ThemeProvider [[74353c2](https://github.com/thlmenezes/grocery-price-watch/commit/74353c2c6bec5817d3c982595e6b8cadcf05d7a5)]
- 💄 use styled [[b2f5690](https://github.com/thlmenezes/grocery-price-watch/commit/b2f56900412f6c58d07691d950fe3afa6b35b929)]
- 💄 add global themes: dark, light [[fea05d3](https://github.com/thlmenezes/grocery-price-watch/commit/fea05d362f6601f196ee5fa32285f31ac86be84d)]
- 🔧 module resolving [[cc2fe3b](https://github.com/thlmenezes/grocery-price-watch/commit/cc2fe3bdec67fc0b1de6b7f89f3abd32f88d0c4b)]

### Fixed

- 🐛 💄 white on white [[42a70da](https://github.com/thlmenezes/grocery-price-watch/commit/42a70da9874ac477fce3bd10353d1de623b4f707)]
- 🐛 update assets path in app.json [[9b12027](https://github.com/thlmenezes/grocery-price-watch/commit/9b12027124d6a4a123adce986af04e4200d56732)]


<a name="0.1.1"></a>
## 0.1.1 (2022-02-15)

Fixes Babel Module Resolving

### Fixed

- 🐛 babel-plugin-module-resolver not resolving [[588fe8e](https://github.com/thlmenezes/grocery-price-watch/commit/588fe8e1e9d6ee97e23161e8f2ea44d9541a75de)]


<a name="0.1.0"></a>
## 0.1.0 (2022-02-15)

Added a Typescript Expo Project with the following tools configured:
- [Eslint](https://eslint.org/)
  - [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
  - [import-helpers/order-imports
](https://github.com/Tibfib/eslint-plugin-import-helpers#readme)
  - [Prettier](https://prettier.io/)
- [LintStaged](https://www.npmjs.com/package/lint-staged)
- [Husky](https://typicode.github.io/husky/#/)
- [Commitlint](https://commitlint.js.org/#/)
  - [commitlint-config-gitmoji](https://www.npmjs.com/package/commitlint-config-gitmoji)
- [Commitzen](https://commitizen-tools.github.io/commitizen/)
  - [cz-gitmoji](https://github.com/Landish/cz-gitmoji)

### Added

- ➕ commitzen + cz-gitmoji [[342b179](https://github.com/thlmenezes/grocery-price-watch/commit/342b1790c0a163defce7e4c8201fec18e6da7968)]
- ➕ lintstaged [[c207daa](https://github.com/thlmenezes/grocery-price-watch/commit/c207daaca2584ffe3a315f105e766c07a044fe5a)]
- ➕ commitlint + husky + gitmoji [[aadf2ac](https://github.com/thlmenezes/grocery-price-watch/commit/aadf2acecca687ea65723b5dd37d0c47f9c61e0b)]
- ➕ 🔧 (eslint) add new configs [[060e34d](https://github.com/thlmenezes/grocery-price-watch/commit/060e34d29a4233454bb5ba59541511f89f267176)]
- ➕ eslint [[644c6fb](https://github.com/thlmenezes/grocery-price-watch/commit/644c6fb4550ee14fa0903b5eee2db79cab827796)]

### Changed

- 🚨 fix App.tsx [[014800a](https://github.com/thlmenezes/grocery-price-watch/commit/014800aeebf62ac72db3193447ae5539addaed3b)]

### Miscellaneous

- 📝 create README [[0e8ca02](https://github.com/thlmenezes/grocery-price-watch/commit/0e8ca02ad1733380971f496ad712235bd61214ec)]
-  Created a new Expo app [[cad424b](https://github.com/thlmenezes/grocery-price-watch/commit/cad424b938f3c3cb9c7304b3b736b3a0f2de04c9)]



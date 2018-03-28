# eslint-config-paysera-base

[![npm version](https://badge.fury.io/js/eslint-config-paysera-base.svg)](http://badge.fury.io/js/eslint-config-paysera-base)

This package provides Paysera's base JS .eslintrc (without React plugins) as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-paysera-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

If you use yarn, run `npm info "eslint-config-paysera-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

    ```sh
    npm info "eslint-config-paysera-base@latest" peerDependencies
    ```

    If using **npm 5+**, use this shortcut

    ```sh
    npx install-peerdeps --dev eslint-config-paysera-base
    ```

    If using **npm < 5**, Linux/OSX users can run

    ```sh
    (
        export PKG=eslint-config-paysera-base;
        npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
    )
    ```

    Which produces and runs a command like:

    ```sh
        npm install --save-dev eslint-config-paysera-base eslint@^#.#.# eslint-plugin-import@^#.#.#
    ```

    If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

    ```sh
    npm install -g install-peerdeps
    install-peerdeps --dev eslint-config-paysera-base
    ```

    The cli will produce and run a command like:

    ```sh
    npm install --save-dev eslint-config-paysera-base eslint@^#.#.# eslint-plugin-import@^#.#.#
    ```

2. Add `"extends": "paysera-base"` to your .eslintrc.

See [Paysera's overarching ESLint config](https://npmjs.com/eslint-config-paysera), [Paysera's Javascript styleguide](https://github.com/paysera/js-style-guide), and the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

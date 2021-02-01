module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/style',
        './rules/best-practices',
        './rules/es6',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        strict: 'error',
    },
};

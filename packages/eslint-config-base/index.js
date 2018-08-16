module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/style',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        strict: 'error',
    },
};

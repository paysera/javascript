module.exports = {
    extends: [
        'eslint-config-airbnb',
        '@paysera/eslint-config-base',
        './rules/react',
    ].map(require.resolve),
    rules: {}
};

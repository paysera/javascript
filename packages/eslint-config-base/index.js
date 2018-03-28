module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/style',
    ].map(require.resolve),
};

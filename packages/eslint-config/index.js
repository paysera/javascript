module.exports = {
    extends: [
        'eslint-config-airbnb',
        '@paysera/eslint-config-base',
    ].map(require.resolve),
    rules: {
        strict: ['error', 'never']
    }
};

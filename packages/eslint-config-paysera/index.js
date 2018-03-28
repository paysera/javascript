module.exports = {
    extends: [
        'eslint-config-airbnb',
        'eslint-config-paysera-base',
    ].map(require.resolve),
    rules: {
        strict: ['error', 'never']
    }
};

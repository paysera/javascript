module.exports = {
    rules: {
        // require parens in arrow function arguments
        // https://eslint.org/docs/rules/arrow-parens
        // At Paysera we decided to not use parens for one line with one arg functions
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    },
};

module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-config-recommended-vue',
    ],
    rules: {
        indentation: 4,
        'value-keyword-case': ['lower', { ignoreFunctions: ['v-bind'] }],
    },
    ignoreFiles: ['dist/**/*.css'],
};

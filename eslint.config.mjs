import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    semi: [ 'error', 'always' ],
    quotes: [ 'error', 'single' ],
    'comma-dangle': [ 'error', 'never' ],
    indent: [ 'error', 2 ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'computed-property-spacing': [ 'error', 'always' ]
  }
});

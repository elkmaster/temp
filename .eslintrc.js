module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'sourceType': 'module',
  },
  'plugins': [
    'jsx-a11y',
    'react',
  ],
  'rules': {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/forbid-prop-types': 'off',
    'jsx-a11y/label-has-for': 'off',
    'import/no-named-as-default': 'off',
    'no-shadow': 'off',
    // remove this after eslint-config-airbnb new release
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};

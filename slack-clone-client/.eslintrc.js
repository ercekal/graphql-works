module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jax-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
  },
  globals: {
    document: 1
  },
  parser: "babel-eslint",
  env: {
    browser: 1,
  }
};
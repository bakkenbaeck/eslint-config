module.exports = {
  parser: require.resolve('babel-eslint'),
  parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
			impliedStrict: true,
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			jsx: true
		}
	},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
		browser: true,
		es6: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  globals: {
		browser: true,
    global: true,
    module: true,
	},
  rules: {
    /** STYLE **/
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': [1, 'always'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'ignore',
    }],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-unused-vars': [1, { args: 'none', varsIgnorePattern: '^h$' }],
    'no-else-return': 2,
    'no-duplicate-imports': 2,
    'object-shorthand': 1,
    'space-before-function-paren': [1, {
      'anonymous': 'always', 
      'named': 'never', 
      'asyncArrow': 'always',
    }],
    
    /** (P)REACT **/
    'react/no-unknown-property': 0,
    'react/self-closing-comp': 2,
	  'react/sort-comp': [2, {
		  'order': [
        'lifecycle',
        'static-methods',
        'everything-else',
        'rendering'
      ],
      'groups': {
        'rendering': [
          '/^render.+$/',
          'render'
        ]
      }
    }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
  }
}
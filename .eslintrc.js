module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
      '@vue/typescript',
    ],
    //2-1**********以下新增**********
    settings:{
      'import/resolver':{
          webpack:{
              config:'node_modules/@vue/cli-service/webpack.config.js',
          },
      },
    },
    //**********end**********
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-useless-constructor': 'off',
      'no-empty-function': 'off',
      
      // 'linebreak-style':[0,'error','windows'],
      // 'key-spacing':0,
      // 'space-before-blocks':0
      //2-2**********以下新增**********
      'indent':['error',4],
      'linebreak-style':[0,'error','windows'],
      'max-len':['error',{code:500}],
       'global-require':0,
       'omport/extensions':['error','always',{
         'js':'never',
         'vue':'never',
         'ts':'never'
       }],
      'np=param-reassign':['error',{
        'prop':true,
        'ignorepropertyModificationsFor':[
          'draggingNode',
          'e',
          'route',
          'req',
          'request',
          'res',
          'response',
          'state',
          'data',
          'item'
        ]
      }],
      'prefer-destructuring': ['error', {'object': true, 'array': false}],
      //**********end**********
    },
    parserOptions: {
      "ecmaVersion":6,
      parser: '@typescript-eslint/parser',
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
        ],
        env: {
          jest: true,
        },
      },
    ],
  };
  
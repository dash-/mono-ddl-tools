require('@babel/polyfill'); // eslint-disable-line import/no-extraneous-dependencies

// Get test specs
const context = require.context('./test/specs', true, /.+Spec\.js$/);
context.keys().forEach(context);


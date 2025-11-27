// This file exists to bridge tools that read `eslint.config.js` but we prefer
// the CommonJS configuration in `.eslintrc.cjs`. Export that config here.
module.exports = require('./.eslintrc.cjs');

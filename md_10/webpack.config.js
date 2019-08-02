const sharedConfig = require('./build-utils/shared');
const webpackMerge = require('webpack-merge');

const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);

module.exports = env =>
  webpackMerge(
    sharedConfig(env),
    loadModeConfig(env)
);

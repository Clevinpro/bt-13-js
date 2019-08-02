const sharedConfig = require('./configs/shared');
const webpackMerge = require('webpack-merge');

const loadModeConfig = env => require(`./configs/${env.mode}`)(env);

module.exports = env =>
  webpackMerge(
    sharedConfig(env),
    loadModeConfig(env)
  );

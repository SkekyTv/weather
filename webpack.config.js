const path = require("path");

module.exports = {
  entry : "./src/index.js",
  module : {
    rules : [ {
      test : /\.m?js$/,
      exclude : /(node_modules)/,
      use : {
        loader : 'babel-loader',
        options : {presets : [ '@babel/preset-env' ]}
      }
    } ]
  },
  resolve : {
    extensions : [ ".*", ".js" ],
  },
  output : {
    path : path.resolve(__dirname, "dist"),
    publicPath : "/",
    filename : "bundle.js",
  },
  target: 'node',
  mode: 'development'
};

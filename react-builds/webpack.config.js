// Use `rake react:update` to build this bundle & copy files into the gem.
// Be sure to set NODE_ENV=production or NODE_ENV=development before running

module.exports = {
  context: __dirname,
  entry: {
    "react-browser": "./react-browser.js",
    "react-server": "./react-server.js",
  },
  output: {
      path: __dirname + "/build/" + process.env.NODE_ENV,
      filename: "[name].js",
  },
};

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "appAuth.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "var",
    library: "appAuth",
  },
};

const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "main.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/*",
      },
    ],
  },
  externals: {
    react: "react",
    "react-native": "react-native",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

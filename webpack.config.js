const path = require("path");
const entryPath = "1_Zadania/Dzien_1/01_Konfiguracja_srodowiska";
const entryFile = "task0a.js";

module.exports = {
  entry: `./${entryPath}/js/${entryFile}`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

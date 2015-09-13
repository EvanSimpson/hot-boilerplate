var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry:  [
      "webpack-dev-server/client?http://0.0.0.0:3000", // WebpackDevServer host and port
      "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
      "./src/scripts/index.js" // Your appʼs entry point
    ],

    output: {
        path: path.join(__dirname, "dist/scripts"),
        filename: "index.js",
        publicPath: "/scripts/"
    },

    module: {

        preLoaders: [
          {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],

        loaders: [
            {
              test: /\.js$/,
              loaders: ["react-hot", "babel?optional=runtime"],
              exclude: /node_modules/
            },
            { 
              test: /\.css$/,
              loaders: ["style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"]
            },
            {
              test: /\.svg$/,
              loader: "svg-inline"
            }
        ]
    },

    eslint: {
      failOnError: true
    },

    postcss: [
      require("autoprefixer-core"),
      require("postcss-color-rebeccapurple")
    ],

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};

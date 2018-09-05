
const path    = require('path');

module.exports = {
    watch: true,
    mode: 'production',
    devtool: false,
    optimization: {
      sideEffects: false
    },
    entry: {
        index: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    externals : [ 'react', 'react-dom' ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};
  
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }
    
    return false; 
}

module.exports = {
    entry: {
        main: '/Users/pacabr/Documents/dev/react-material-mlb/src/main.js'
    },
    output: {
        filename: './dist/scripts/[name].js'
    },
    resolve: {
        modulesDirectories: ['src', 'node_modules']
      },
    devtool: getDevTool(),
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|img)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/styles/main.css', {
            allChunks: true
        })
    ]
};
const path = require('path')

module.exports = {
    mode:'development',
    devtool: 'source-map',
    entry: {
        app: ['./src/App.jsx',]
    },
    output:{
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'public'),
        
    },
    module : {
        rules :[
         {
            test : /\.jsx$/,
            exclude:'/node_modules/',
            use: 'babel-loader'
        }
        ]
    },
    optimization: {
        splitChunks: {
          name: 'vendor',
          chunks: 'all',
        },
    },
}
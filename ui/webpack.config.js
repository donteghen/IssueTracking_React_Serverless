const path = require('path')
const nodeExternals = require('webpack-node-externals');
browserConfig = {
    mode:'development',
    devtool: 'source-map',
    entry: {
        app: ['./src/browser/App.jsx',]
    },
    output:{
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'public'),
        
    },
    module : {
        rules :[
         {
            test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: '11',
                  edge: '15',
                  safari: '10',
                  firefox: '50',
                  chrome: '49',
                }, }],
                '@babel/preset-react',
                ],
                }, 
            },
                        
        },
        {
            test : /\.css$/,
            use : [
                {loader : 'style-loader'},
                {loader : 'css-loader'}
            ]
        },
        
        ]
    },
    optimization: {
        splitChunks: {
          name: 'vendor',
          chunks: 'all',
        },
    },
}

const serverConfig = {
    mode: 'development',
    entry: { server: ['./src/server/uiserver.js'] },
    target: 'node',
    externals: [nodeExternals()],
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
  }, 
    module: {
        rules: [ {
        test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                        options: {
                        presets: [
                            ['@babel/preset-env', {
                            targets: { node: '10' },
                            }],
                            '@babel/preset-react',
                        ],
                    }, 
                },
             }, 
        ],
    },
        
    devtool: 'source-map',
    };

    module.exports = [browserConfig, serverConfig]
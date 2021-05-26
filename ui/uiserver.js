const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path')
const app = express();

if(process.env.NODE_ENV === 'production'){
    const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');

  const config = require('./webpack.config')
  config.entry.app.push('webpack-hot-middleware/client')
  config.options = config.options || [];
  config.options.push(new webpack.HotModuleReplacementPlugin())

  const compiler = webpack(config)
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static('public'));
app.get('*', (req, res) =>{ 
  console.log('reuwstes')
  res.sendFile(path.resolve('public/index.html'))
})
app.use('/graphql', createProxyMiddleware({ target: 'http://localhost:4000/', changeOrigin: true }));


app.listen(3000, function () { console.log('App started on port 3000');
});
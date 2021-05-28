import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import render from '../../server/render.jsx';

import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import config from '../../webpack.config'
const app = express();

if(process.env.NODE_ENV === 'production'){

  config.entry.app.push('webpack-hot-middleware/client')
  config.options = config.options || [];
  config.options.push(new webpack.HotModuleReplacementPlugin())

  const compiler = webpack(config)
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static('public'));
app.get('/about', render);
app.get('*', (req, res) =>{ 
  console.log('reuwstes')
  res.sendFile(path.resolve('public/index.html'))
})
app.use('/graphql', createProxyMiddleware({ target: 'http://localhost:4000/', changeOrigin: true }));


app.listen(3000, function () { console.log('App started on port 3000');
});
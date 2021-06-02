import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const bodyParser = require('body-parser')
import path from 'path';
import render from '../../server/render.jsx';

//const cookie
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const {googleClientId} = require('../browser/env')
const {jwtScret} = require('../browser/env')
const client = new OAuth2Client(googleClientId);

import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import config from '../../webpack.config'
import cookieParser from 'cookie-parser';
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
app.use(cookieParser())
app.post('/user', bodyParser.json(), (req, res) => {
  try {
    const token = req.cookies.jwt
    if(!token){
      res.send({signedIn:false})
    }
    const credentials = jwt.verify(token, jwtScret)
    res.send(credentials)
  } catch (error) {
      console.log({signedIn:false})
  }
})

app.post('/signin', bodyParser.json(), async (req, res) => {
    try {
      
        const ticket = await client.verifyIdToken({
        idToken: req.body.google_token,
        audience: googleClientId,  
        });
        const payload = ticket.getPayload();
        //console.log(payload)
        const {email, name } = payload
        const credentials = {
          signedIn: true, name, email
        };
        
        const token = jwt.sign(credentials, jwtScret);
        
        res.cookie('jwt',token,{httpOnly:true})
       res.json(credentials)
    } catch (error) {
        console.log(error)
    }
})
app.get('/about', render);
app.get('*', (req, res) =>{ 
  console.log('reuwstes')
  res.sendFile(path.resolve('public/index.html'))
})
app.use('/graphql', createProxyMiddleware({ target: 'http://localhost:4000/', changeOrigin: true }));


app.listen(3000, function () { console.log('App started on port 3000');
});
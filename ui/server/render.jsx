const React = require('react');
import ReactDOMServer from'react-dom/server';
import About from'../../ui/src/About.jsx';
import template from'./template.js';
import Page from '../src/browser/components/Page.jsx'
import {StaticRouter} from 'react-router'

export default function render(req, res) {
  const element = <StaticRouter context={{}} location={req.url}>
    <Page/>
  </StaticRouter>
  const body = ReactDOMServer.renderToString(
    element,
  );
  res.send(template(body));
}

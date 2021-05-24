'use strict';
import 'babel-polyfill'
import 'whatwg-fetch';
import ReactDOM from 'react-dom'
import React from 'react'
import Page from './components/Page.jsx'
import {HashRouter as Router} from 'react-router-dom'
const element = <Router>
  <Page/>
</Router>
const domContainer = document.querySelector('#container');
ReactDOM.render(element, domContainer)

if (module.hot) {
  module.hot.accept();
}
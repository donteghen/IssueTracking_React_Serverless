'use strict';
import 'babel-polyfill'
import 'whatwg-fetch';
import ReactDOM from 'react-dom'
import React from 'react'
import Page from './components/Page.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
const element = <Router>
  <Page/>
</Router>
const domContainer = document.querySelector('#container');
ReactDOM.render(element, domContainer)

'use strict';
import 'babel-polyfill'
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Page from './components/Page.jsx'
import {BrowserRouter as Router} from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee , faTimesCircle, faTrash, faPlusCircle} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faTimesCircle, faTrash, faPlusCircle)

const element = <Router>
  <Page/>
</Router>
const domContainer = document.querySelector('#container');
ReactDOM.hydrate(element, domContainer)
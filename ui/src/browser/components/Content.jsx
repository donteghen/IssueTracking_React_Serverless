import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import About from '../../About.jsx'
import IssueDetail from './IssueDetail.jsx'
import IssueEdit from './IssueEdit.jsx'
import IssueList from './IssueList.jsx'
import IssueReport from './IssueReport.jsx'
import Profile from './Profile.js'


const PageNotFound = () =>{
    return <div>You seam lost. No content to show you :)</div>
}
export default function Content (){
    return (
        <Switch>
          <Redirect exact from="/" to="/issues" />
          <Route path="/issues/:id/edit" component={IssueEdit} />
          <Route path='/issues/:id' component={IssueDetail}/>
          <Route path="/issues" component={IssueList} />
          <Route path="/report" component={IssueReport} />
          <Route path='/profile' component={Profile} />
          <Route path="/about" component={About} />
          <Route path='*' component={PageNotFound} /> 
        </Switch> 
    );
}
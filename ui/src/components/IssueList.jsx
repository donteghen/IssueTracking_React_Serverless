import React, { useEffect, useState } from 'react'
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import IssueDetail from './IssueDetail.jsx';
import {Route, useLocation} from 'react-router-dom'
import {Button }from 'react-bootstrap'
export default function IssueList (props){ 
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  const param = useQuery()
  const status = param.get('status') ? param.get('status') : 'All'
  const minEffort = param.get('minEffort') ? param.get('minEffort') : 1
  const maxEffort = param.get('maxEffort') ? param.get('maxEffort') : 100

    const [issues, setIssues] = useState([])
     const uri = 'http://localhost:3000/graphql' 
    useEffect(() => 
    {
      loadData();
  },[status, minEffort, maxEffort]) 
     function loadData() {
      const query = 
      `query {
issueList(status:"${status}", minEffort:${minEffort}, maxEffort:${maxEffort}) {
id title status owner created effort due
}
}`;
      fetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query })
      }).then(response => response.json())
      .then(result => {
        console.log(result.data.issueList.map(i => i.effort))
        setIssues(result.data.issueList)
      })
  }
    function createIssue(issue) {
      const query = `
      mutation {
        createIssue(owner:"${issue.owner}", title:"${issue.title}", due:"${issue.due}", effort:${issue.effort}, description:"${issue.description}"){
          id title owner effort due
        }
      }
      `;
      fetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query})
      }).then(response => response.json())
      .then(result => {
        loadData();
      })
      
  }
     
      return (
        <React.Fragment>
           
          <IssueFilter />
          <hr />
          <IssueTable issues={issues} />
          <hr />
          <IssueAdd createIssue={createIssue} />
          <hr />
          <Route path='/issues/:id' component={IssueDetail}/>
          
        </React.Fragment>
      );
  }
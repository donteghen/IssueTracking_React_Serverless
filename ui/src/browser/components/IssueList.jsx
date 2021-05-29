import React, { useEffect, useState } from 'react'
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import IssueDetail from './IssueDetail.jsx';
import {Route, useLocation} from 'react-router-dom';

export default function IssueList (props){ 
  const [page, setPage] = useState(0)
  const [minEffort, setMinEffort] = useState(1)
  const [maxEffort, setMaxEffort] = useState(100)
  const [status, setStatus] = useState('All')
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  
  // const param = useQuery()
  // const status = param.get('status') ? param.get('status') : 'All'
  // const minEffort = param.get('minEffort') ? Number(param.get('minEffort')) : 1
  // const maxEffort = param.get('maxEffort') ? Number(param.get('maxEffort')) : 100

    const [issues, setIssues] = useState([])
     const uri = 'http://localhost:3000/graphql' 
    useEffect(() => 
    {
      console.log(status, minEffort, maxEffort)
      loadData();
      
  },[]) 
     function loadData() {
      const query = 
      `query {
issueList(page:${page}, status:"${status}", minEffort:${minEffort}, maxEffort:${maxEffort}) {
issues {
  id title status owner created effort due
}
currpage lastpage
}
}`;
      fetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query })
      }).then(response => response.json())
      .then(result => {
        console.log(result.data.issueList)
        setIssues(result.data.issueList.issues)
        setPage(Math.floor(result.data.issueList.dbcount/10))
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
         
          <IssueTable Page={page} SetPage={setPage} issues={issues} />
          
          <IssueAdd createIssue={createIssue} />
          
          
          
        </React.Fragment>
      );
  }
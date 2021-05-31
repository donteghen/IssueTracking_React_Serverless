import React, { useEffect, useState } from 'react'
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import { GRAPHQL_URI } from '../env.js';

export default function IssueList (){ 
  const [lastPage, setLastPage] = useState(1)
  const [page, setPage] = useState(0)
  const [minEffort, setMinEffort] = useState(1)
  const [maxEffort, setMaxEffort] = useState(100)
  const [status, setStatus] = useState('All')
  const [issues, setIssues] = useState([])
     
    useEffect(() => 
    {
      console.log(lastPage, page)
      if(page >= 0 && page <= lastPage){
        loadData()
      }
      //console.log(lastPage, page)
  },[page]) 
  const applyFilterReload = () => {
    //console.log(status, minEffort, maxEffort)
    loadData()
    //console.log(lastPage, page)
  }
  
     function loadData() {
      // console.log(page, status, minEffort, maxEffort)
      // console.log(typeof(page), typeof(status), typeof(minEffort), typeof(maxEffort))
      const query = 
      `query {
issueList(page:${page}, status:"${status}", minEffort:${minEffort}, maxEffort:${maxEffort}) {
issues {
  id title status owner created effort due
}
currpage lastpage
}
}`;
      fetch(GRAPHQL_URI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query })
      }).then(response => response.json())
      .then(result => {
        console.log(result.data.issueList.currpage)
        setIssues(result.data.issueList.issues)
        setPage(result.data.issueList.currpage)
        setLastPage(result.data.issueList.lastpage)
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
      fetch(GRAPHQL_URI, {
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
           
          <IssueFilter St={status} MaxEf={maxEffort} MinEf={minEffort} setMaxEf={setMaxEffort} 
          setMinEf={setMinEffort} setSt={setStatus} applyload={applyFilterReload}/>
         
          <IssueTable Page={page} SetPage={setPage} LastPage={lastPage}
           issues={issues} />
          
          <IssueAdd createIssue={createIssue} />
          
          
          
        </React.Fragment>
      );
  }
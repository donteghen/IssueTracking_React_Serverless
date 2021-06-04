import React, { useEffect, useState } from 'react'
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import {Spinner, Modal} from 'react-bootstrap'
import { GRAPHQL_URI } from '../env.js';

export default function IssueList (){ 
  const [loading, setLoading] = useState(false)
  const [lastPage, setLastPage] = useState(1)
  const [page, setPage] = useState(0)
  const [minEffort, setMinEffort] = useState(1)
  const [maxEffort, setMaxEffort] = useState(100)
  const [status, setStatus] = useState('All')
  const [issues, setIssues] = useState([])
     
    useEffect(() => 
    {
      if(page >= 0 && page <= lastPage){
        loadData()
      }
     
  },[page]) 
  const applyFilterReload = () => {
    loadData()
  }
  
     function loadData() {
       setLoading(true)
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
        //console.log(result.data.issueList.currpage)
        
        setIssues(result.data.issueList.issues)
        setPage(result.data.issueList.currpage)
        setLastPage(result.data.issueList.lastpage)
        setLoading(false)
      })
      .catch(error => console.log(error))
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
     if(loading){
       return (

      <Modal show ={loading} onHide={() => setLoading(false)} size='sm'>
                  
                    <Modal.Body>
                    <div className='container text-center bg-light' >
                    <Spinner animation="border" role="status" size='' variant='primary' >
                    <span className="sr-only">Loading...</span>
                  </Spinner> Loading...
                  </div>
                  </Modal.Body>
            </Modal>
       )
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
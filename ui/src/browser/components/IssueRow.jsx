import React from 'react'
import {Link, NavLink, useHistory } from 'react-router-dom'
import {GRAPHQL_URI} from '../env'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function IssueRow (props){
    const history = useHistory()
    const issue = props.issue
    const deleteIssueById = () =>{
      const query = `
      mutation {
          deleteIssue(id:"${issue.id}"){
              id title
          }
      }
      `
      fetch(GRAPHQL_URI, {
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({query})
      }).then(res => res.json())
      .then(result => {
          history.push('/')
      })
  }
  const closeIssueById = () =>{
    const query = `
    mutation {
        closeIssue(id:"${issue.id}"){
            id title
        }
    }
    `
    fetch(GRAPHQL_URI, {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({query})
    }).then(res => res.json())
    .then(result => {
        history.push('/')
    })
}
    return (
      <tr >
      <td >{issue.title.substring(0, 40) + '...'}</td>
      <td >{issue.status}</td>
      <td >{issue.owner}</td>
      <td >{issue.effort}</td>
      <td >{issue.created}</td>     
      <td >{issue.due ? issue.due : ''}</td>    
      <td>
      <Link to={`/issues/${issue.id}/edit`}><FontAwesomeIcon icon='edit'/></Link>
      { ' | '}
      <NavLink to={`/issues/${issue.id}`}><FontAwesomeIcon icon='eye' /></NavLink>
      </td>
      <td>
      <button className="btn btn-warning" onClick={() => closeIssueById()}>
        <FontAwesomeIcon icon='times-circle' />
      </button>
      { ' | '}
      <button className="btn btn-danger" onClick={() => deleteIssueById()}>
        <FontAwesomeIcon icon='trash' />
      </button>
      </td>
      </tr> );
}

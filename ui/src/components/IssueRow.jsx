import React from 'react'
import {Link, NavLink } from 'react-router-dom'
export default function IssueRow (props){

    const issue = props.issue
    return (
      <tr>
        <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due : ''}</td>
      <td>{issue.title}</td>
      <td>
      <Link to={`/issues/${issue.id}/edit`}>Edit</Link>
      { '  '}
      <NavLink to={`/issues/${issue.id}`}>Details</NavLink>
      </td>
      </tr> );
}

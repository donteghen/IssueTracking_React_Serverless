import React from 'react'
import IssueRow from './IssueRow.jsx'
export default function IssueTable (props) {
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/> )
    return (
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr >
            <th scope='col'>ID</th>
            <th scope='col'>Status</th>
            <th scope='col'>Owner</th>
            <th scope='col'>Created</th>
            <th scope='col'>Effort</th>
            <th scope='col'>Due Date</th>
            <th scope='col'>Title</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
        {issueRows}
        </tbody>
      </table>
)
}
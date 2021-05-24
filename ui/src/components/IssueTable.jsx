import React from 'react'
import IssueRow from './IssueRow.jsx'
export default function IssueTable (props) {
    
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/> )
    const rowStyle = {border: "1px solid silver", padding: 4};
    return (
      <table>
        <thead>
          <tr className="bordered-table">
            <th>ID</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {issueRows}
        </tbody>
      </table>
)
}
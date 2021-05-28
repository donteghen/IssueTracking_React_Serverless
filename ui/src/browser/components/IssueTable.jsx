import React from 'react'
import IssueRow from './IssueRow.jsx'
export default function IssueTable (props) {
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/> )
    return (
      <div className='table-responsive my-2 py-2'>
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr >
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
      </div>
)
}
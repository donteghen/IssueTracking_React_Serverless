import React from 'react'
import IssueRow from './IssueRow.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function IssueTable ({issues, Page, SetPage, LastPage}) {
    const issueRows = issues.map(issue => <IssueRow key={issue.id} issue={issue}/> )
function handlePrev(){
  if(Page <= 0) return
  SetPage(Page - 1)
}
function handleNext(){
  if(Page >= LastPage - 1) return
  SetPage(Page + 1)
}

    return (
      <div className='table-responsive my-2 p-2'>
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Title</th>
            <th>More</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {issueRows}
        </tbody>
      </table>
      <div>
      <button className="btn btn-danger m-2 p-2" onClick={handlePrev}>
      <span className='mx-2 px-1'><FontAwesomeIcon icon='arrow-circle-left' /></span>Prev
      </button>
      <button className="btn btn-danger m-2 p-2" onClick={handleNext}>Next 
         <span className='mx-2 px-1'><FontAwesomeIcon icon='arrow-right' /></span>
      </button>
      </div>
      </div>
)
}
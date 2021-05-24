import React from 'react'
export default class IssueFilter extends React.Component { 
    render() {
      return (
        <div>
            <a href="/#/issues?status=All">All</a>
            {' | '}
            <a href="/#/issues?status=New">New</a>
            {' | '}
            <a href="/#/issues?status=Assigned">Report</a>
        </div>
      )
    }
    }
import React from 'react'
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';

export default class IssueList extends React.Component { 
    constructor(props) {
      super(props);
      this.state = { 
        issues: [] ,
        
      };
       this.uri = 'http://localhost:3000/graphql'
      this.createIssue = this.createIssue.bind(this);
      
    }
    componentDidMount() {
      this.loadData();
  }
   componentDidUpdate(prevProps){
     const prevFilterParam = prevProps.location.search
    const filterParam = this.props.location.search
    if(prevFilterParam !== filterParam){
      this.loadData()
    }
   }
     loadData() {
       const param = this.props.location.search.slice(this.props.location.search.indexOf('=') + 1)
      const query = 
      `query {
issueList(status:"${param}") {
id title status owner created effort due
}
}`;
      fetch(this.uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query })
      }).then(response => response.json())
      .then(result => this.setState({ issues: result.data.issueList }))
  }
    createIssue(issue) {
      const query = `
      mutation {
        createIssue(owner:"${issue.owner}", title:"${issue.title}", due:"${issue.due}", effort:${issue.effort}){
          id title owner effort due
        }
      }
      `;
      fetch(this.uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query})
      }).then(response => response.json())
      .then(result => {
        console.log(result)
        this.loadData();
      })
      
  }
    render() {
      console.log(this.filterParam)
      return (
        <React.Fragment>
          <h1>Issue Tracker</h1>
          <IssueFilter />
          <hr />
          <IssueTable issues={this.state.issues} />
          <hr />
          <IssueAdd createIssue={this.createIssue} />
        </React.Fragment>
      );
  }
  }
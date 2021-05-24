const issuesDB = [
    {
      id: 1, status: 'New', owner: 'Ravan', effort: 5,
      created: new Date('2019-01-15'), due: undefined,
      title: 'Error in console when clicking Add',
  }, {
      id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
      created: new Date('2019-01-16'), due: new Date('2019-02-01'),
      title: 'Missing bottom border on panel',
  }, ];
  
module.exports = {
    Query : {
        about : () => "Issue Tracker API v1.0",
        issueList : (_, {status}) => {
            console.log(status)
            console.log('in coming requiesrs')
            if(status && status !== "All"){
                return issuesDB.filter(issue => issue.status === status)
            }
            return issuesDB
        }
    },
    Mutation: {
        setAboutMessage : (_, {message}) => message,
        createIssue : (_, {title, effort, due, owner}) =>{
            console.log(title)
            const newIssue = {
                id:issuesDB.length + 1,
                title,
                status:'New',
                created: new Date().toISOString().split('T')[0],
                due : new Date(due).toISOString().split('T')[0],
                owner,
                effort
            }
            issuesDB.push(newIssue)
            return newIssue
        }
    }
}
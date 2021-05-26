const issuesDB = [
    {
      id: 1, status: 'New', owner: 'Ravan', effort: 5,
      created: new Date('2019-01-15'), due: undefined,
      title: 'Error in console when clicking Add', description:'this issues is of high impprtance to the manyaks of software'
  }, {
      id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
      created: new Date('2019-01-16'), due: new Date('2019-02-01'),
      title: 'Missing bottom border on panel', description:'nothing matter any more or less than nothing else. fuck off'
  }, ];
  
module.exports = {
    Query : {
        about : () => "Issue Tracker API v1.0",
        issueList : (_, {status, minEffort, maxEffort}) => {
            console.log(status, minEffort, maxEffort)
            
            if(status !== 'All'){
                return issuesDB.filter(issue => issue.status === status && issue.effort >= minEffort && issue.effort <= maxEffort)
            }
            if(status === 'All'){
                console.log('iiiii')
                return issuesDB.filter(issue =>issue.effort >= minEffort && issue.effort <= maxEffort)
            }
            return issuesDB
        },
        issue : (_, {id}) =>{
            const issueFound = issuesDB.find(i => i.id === id)
            return issueFound
        }
    },
    Mutation: {
        setAboutMessage : (_, {message}) => message,
        createIssue : (_, {title, effort, due, owner, description}) =>{
            const newIssue = {
                id:issuesDB.length + 1,
                title,
                status:'New',
                created: new Date().toISOString().split('T')[0],
                due : new Date(due).toISOString().split('T')[0],
                owner,
                effort, 
                description
            }
            issuesDB.push(newIssue)
            return newIssue
        }
    }
}
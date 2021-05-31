const data = require('./mock');
const objectid = require('objectid')
let issuesDB = data;
//console.log(issuesDB.length)
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //console.log(objectid().toString())
module.exports = {
    Query : {
        about : () => "Issue Tracker API v1.0",
        issueList : (_, {page=0, status='All', minEffort=1, maxEffort=100}) => {
            //console.log(page, status, minEffort, maxEffort)
            
            if(status !== undefined && status !== 'All'){
                //console.log('variable')
                const issuesFilter = issuesDB.filter(issue => issue.status === status && issue.effort >= minEffort && issue.effort <= maxEffort)
                const issues = issuesFilter.filter((issue, index, array) => index >= page*10 && index < (page * 10 + 10) && index < array.length)
                const lastpage = Math.ceil(issuesFilter.length/10);
                const currpage = page
                return {issues, lastpage, currpage}
            }
            if(status === 'All'){
                //console.log('All')
                const issuesFilter = issuesDB.filter(issue =>issue.effort >= minEffort && issue.effort <= maxEffort)
                const issues = issuesFilter.filter((issue, index, array) => index >= page*10 && index < (page * 10 + 10) && index < array.length)
                //console.log(issues.length)
                const lastpage = Math.ceil(issuesFilter.length/10);
                const currpage = page
                return {issues, lastpage, currpage}
            }
            const issuesFilter = issuesDB
            const issues = issuesFilter.filter((issue, index, array) => index >= page*10 && index < (page * 10 + 10) && index < array.length)
            const lastpage = Math.ceil(issues.length/10);
            const currpage = page
            return {issues, lastpage, currpage}
        },
        issue : (_, {id}) =>{
            //console.log(id)
            const issueFound = issuesDB.find(i => i.id === id)
            return issueFound
        },
        getReport : () => {
            let reports = [];
            const reporters = issuesDB.map(issue => issue.owner).filter((issue, index, array) => array.indexOf(issue) === index);
            //console.log(reporters)
            reporters.forEach(reporter => {
                const rep = issuesDB.filter(issue => issue.owner === reporter)
                const rep_object = {
                    reporter : reporter,
                    reporter_new: rep.filter(issue => issue.status === 'New').length,
                    reporter_fixed: rep.filter(issue => issue.status === 'Closed').length,
                    reporter_closed:rep.filter(issue => issue.status === 'Assigned').length,
                    reporter_assigned: rep.filter(issue => issue.status === 'Fixed').length,
                }
                reports.push(rep_object)
            });
            return reports
        }
    },
    Mutation: {
        setAboutMessage : (_, {message}) => message,
        createIssue : (_, {title, effort, due, owner, description}) =>{
            const newIssue = {
                id:objectid().toString(),
                title,
                status:'New',
                created: new Date().toLocaleDateString(undefined, options),
                due : new Date(due).toLocaleDateString(undefined, options),
                owner,
                effort, 
                description
            }
            issuesDB.push(newIssue)
            return newIssue
        },
        updateIssue : (_, {id, status, due, effort,description, owner}) =>{
            //console.log(id,status, effort, typeof(due))
            const updatableIssue = issuesDB.find(issue => issue.id === id)
            if(updatableIssue){
                //console.log(updatableIssue.due, )
                updatableIssue.status = status ?? updatableIssue.status  
                updatableIssue.effort = effort ?? updatableIssue.effort  
                updatableIssue.due = new Date(due).toLocaleDateString(undefined, options) ?? updatableIssue.due  
                updatableIssue.owner = owner ?? updatableIssue.owner  
                updatableIssue.description = description ?? updatableIssue.description  

                issuesDB = issuesDB.filter(issue => issue.id !== id)
                issuesDB.unshift(updatableIssue)
               
                return updatableIssue;
            }
            
            
        },
        deleteIssue : (_, {id}) =>{
            if(id){
                const deletableIssue = issuesDB.find(issue => issue.id === id);
                if(deletableIssue){
                    issuesDB = issuesDB.filter(issue => issue.id !== id);
                    return deletableIssue;
                }
            }
        },
        closeIssue : (_, {id}) =>{
            if(id){
                const closableIssue = issuesDB.find(issue => issue.id === id);
                if(closableIssue){
                    closableIssue.status = 'Closed'

                    issuesDB = issuesDB.filter(issue => issue.id !== id).concat(closableIssue)
                    return closableIssue;
                }
                
            }
        },
    }
}
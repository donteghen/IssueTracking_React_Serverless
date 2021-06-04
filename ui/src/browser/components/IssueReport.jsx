import React, { useEffect, useState } from 'react'
import { GRAPHQL_URI } from '../env';

export default function IssueReport (){
    const [reports, setReports] = useState([])
    useEffect(() =>{
        
        loadData()
    },[])
    const loadData = () =>{
        const query = `
        query {
            getReport {
                reporter reporter_new reporter_fixed reporter_closed reporter_assigned
            }
        }
        `;
        fetch(GRAPHQL_URI, {
            method:'POST',
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify({query})
        })
        .then(res => res.json())
        .then(result => {
            setReports(result.data.getReport)
            //console.log(result.data.getReport)
        })
    }
    const renderer = () => {   
        return reports.map(report => (<tr key={report.reporter}>
            <th >{report.reporter}</th>
            <td>{report.reporter_new}</td>
            <td>{report.reporter_assigned}</td>
            <td>{report.reporter_fixed}</td>
            <td>{report.reporter_closed}</td>
            </tr>))
    }
    return (
        <div className='my-4 p-2 table-responsive '>
            <div className='text-center'><h2>Complete Platform Issue Report Statistics</h2></div>
            <table className="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">New</th>
                <th scope="col">Assigned</th>
                <th scope="col">Fixed</th>
                <th scope="col">Closed</th>
                </tr>
            </thead>
            <tbody>
                {renderer()}
            </tbody>
            </table>
            
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const uri = 'http://localhost:3000/graphql'
export default function IssueDetail () {
    const [issue, setIssus] = useState('')
    const {id} = useParams()
    useEffect(() =>{
        loadData()
    }, [id])
    const loadData = () =>{
        const query = `
        query {
            issue(id:${id}){
                description 
            }
        }
        `
        fetch(uri, {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({query})
        }).then(res => res.json())
        .then(result => {
            console.log(result);
            setIssus(result.data.issue)
        })
    }
    return (
        <div>
            <h3>Description</h3>
            <pre>{issue.description}</pre>
        </div>
    )
}
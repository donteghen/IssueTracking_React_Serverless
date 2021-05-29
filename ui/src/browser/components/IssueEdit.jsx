import React, { useEffect, useState } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {GRAPHQL_URI} from '../env'
export default function IssueEdit (){
    const [issue, setIssue] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() =>{
        loadData()
        
    }, [id])
    const loadData = () =>{
        const query = `
        query {
            issue(id:"${id}"){
                id effort due owner description status created title
            }
        }
        `
        fetch(GRAPHQL_URI, {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({query})
        }).then(res => res.json())
        .then(result => {
            const resIssue = result.data.issue;
            resIssue.due = resIssue.due ? new Date(resIssue.due).toISOString().split('T')[0] : ''
            setIssue(resIssue)
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        const {status, description, due, owner, effort} = issue
        const query = `
        mutation {
            updateIssue(id:"${id}", status:"${status}", description:"${description}", due:"${due}", owner:"${owner}", effort:${effort}){
                title description id owner status due created effort
            }
        }
        `;
        fetch(GRAPHQL_URI, {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({query})
        }).then(res => res.json())
        .then(result => {           
            const resIssue = result.data.updateIssue;
            resIssue.due = resIssue.due ? new Date(resIssue.due).toISOString().split('T')[0] : ''
            setIssue(resIssue)
        })
    }
    function onChange(e) {
        // if(newValue && newValue !== e.target.value){
        //     setIssue({...issue, [name] : newValue})
        // }
       const {name, value} = e.target;
        setIssue({...issue, [name] : value})
    }
    const goBack = () =>{
        const answer = window.confirm('Are you sure you wish to leave this page?')
        if(!answer){
            return
        }
        history.push('/issues')
    }
    return (
        <div>
           {!issue ? (<h1>No issue with provided id was found</h1>) : 
           ( <form onSubmit={handleSubmit}>
                <h3>{`Editing issue: ${id}`}</h3>
                <table>
                    <tbody> 
                    <tr>
                        <td>Created:</td>
                        <td>{issue.created ? issue.created : ''}</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>
                        <select className='form-control my-2 py-2' name="status" value={issue.status ?? ''} onChange={onChange}>
                            <option value="New">New</option>
                            <option value="Assigned">Assigned</option>
                            <option value="Fixed">Fixed</option>
                            <option value="Closed">Closed</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Owner:</td>
                        <td>
                            <input className='form-control my-2 py-2'
                            name="owner"
                            value={issue.owner ?? ''}
                            onChange={onChange}
                        /> </td>
                    </tr> 
                    <tr>
                        <td>Effort:</td>
                        <td>
                            <input className='form-control my-2 py-2' onChange={onChange} 
                            value={issue.effort ?? ''} name='effort' type='number'
                        /> </td>
                    </tr> 
                    <tr>
                        <td>Due:</td>
                        <td>
                            <input className='form-control my-2 py-2'
                            type='date'
                            name="due"
                            value={issue.due ?? ''}
                            onChange={onChange}
                        /> </td>
                    </tr> 
                    <tr>
                        <td>Title:</td>
                        <td>
                            <input className='form-control my-2 py-2'
                            size={50}
                            name="title"
                            value={issue.title ?? ''}
                            onChange={onChange}
                        /> </td>
                    </tr> 
                    <tr>
                    <td>Description:</td>
                        <td>
                            <textarea className='form-control my-2 py-2'
                            rows={8}
                            cols={50}
                            name="description"
                            value={issue.description ?? ''}
                            onChange={onChange}
                        />
                        </td> 
                    </tr>
                    <tr>
                    <td />
                        <td>
                            <button className='btn btn-primary m-2 p-2' type="submit">Submit</button>
                            <button className='btn btn-warning m-2 p-2' onClick={goBack} >Back to Issues</button>
                        </td>
                    </tr>
                    </tbody>
                    </table>
            </form> )}

        </div>
    )
}
import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import NumberInput from '../specializedComponents/NumberInput.jsx'
import {GRAPHQL_URI} from '../env'
export default function IssueEdit (){
    const [issue, setIssue] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        loadData()
    }, [id])
    const loadData = () =>{
        const query = `
        query {
            issue(id:${id}){
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
            //console.log(result);
            setIssue(result.data.issue)
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        const {status, description, due, owner, effort} = issue
        const query = `
        mutation {
            updateIssue(id:${id}, status:"${status}", description:"${description}", due:"${due}", owner:"${owner}", effort:${effort}){
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
            console.log(result);
            setIssue(result.data.updateIssue)
        })
    }
    function onChange(e) {
        // if(newValue && newValue !== e.target.value){
        //     setIssue({...issue, [name] : newValue})
        // }
       const {name, value} = e.target;
        setIssue({...issue, [name] : value})
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
                        <select name="status" value={issue.status ?? ''} onChange={onChange}>
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
                            <input
                            name="owner"
                            value={issue.owner ?? ''}
                            onChange={onChange}
                        /> </td>
                    </tr> 
                    <tr>
                        <td>Effort:</td>
                        <td>
                            <input onChange={onChange} value={issue.effort ?? ''} name='effort' type='number'
                        /> </td>
                    </tr> 
                    <tr>
                        <td>Due:</td>
                        <td>
                            <input
                            type='date'
                            name="due"
                            value={issue.due ?? ''}
                            onChange={onChange}
                        /> </td>
                    </tr> 
                    <tr>
                        <td>Title:</td>
                        <td>
                            <input
                            size={50}
                            name="title"
                            value={issue.title ?? ''}
                            onChange={onChange}
                        /> </td>
                    </tr> 
                    <tr>
                    <td>Description:</td>
                        <td>
                            <textarea
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
                        <td><button type="submit">Submit</button></td>
                    </tr>
                    </tbody>
                    </table>
                    <Link to={`/issues/${Number(id)- 1}/edit`}>Prev</Link>
                    {' | '}
                    <Link to={`/issues/${Number(id)+ 1}/edit`}>Next</Link>
            </form> )}

        </div>
    )
}
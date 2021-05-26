import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

export default function IssueFilter (){ 
  const [minEffort, setMinEffort] = useState('');
  const [maxEffort, setMaxEffort] = useState('')
  const [status, setStatus] = useState('')
 const history = useHistory()
      const handleSelectionChange = (e) =>{
        console.log(e.target.name, e.target.value)
        if(e.target.name === 'minEffort'){
          setMinEffort(e.target.value)
        }
        if(e.target.name === 'maxEffort'){
          setMaxEffort(e.target.value)
        }
        if(e.target.name === 'status'){
          setStatus(e.target.value)
        }
        
      }
      const resetFilter = () =>{
        setMaxEffort('');
        setMinEffort('');
        setStatus('')
        history.push('/issues')
      }
      const applyFilter = () =>{
        history.push(`/issues?status=${status}&minEffort=${minEffort}&maxEffort=${maxEffort}`)
      }
      return (
        <div>
           status : 
           { ' '}
           <select name='status' onChange={handleSelectionChange} >
             <option value="">All</option>
             <option value="New">New</option>
             <option value="Assigned">Assigned</option>
             <option value="Fixed">Fixed</option>
             <option value="Closed">Closed</option>
           </select>
            { ' ' }
            effort Between : { ' '}
            <input name='minEffort' value={minEffort} type='number' onChange={handleSelectionChange}/>
            {' - '}
            <input name='maxEffort' value={maxEffort} type='number' onChange={handleSelectionChange}/>
            {' '}
            <button onClick={applyFilter}>Apply</button>
            {' '}
            <button onClick={resetFilter}>reset</button>
        </div>
      )
    }
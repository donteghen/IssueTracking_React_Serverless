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
        <div className='container'>
          <div className='row my-4 py-2'> 
            <div className='col-sm-12 col-lg-3 my-2 py-2'>
            status : 
            { ' '}
              <select style={{border:'1px #0275d8 solid', borderRadius:'25px', outline:'none'}} name='status' onChange={handleSelectionChange} >
                <option value="">All</option>
                <option value="New">New</option>
                <option value="Assigned">Assigned</option>
                <option value="Fixed">Fixed</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
              { '  ' }
              <div className='col-sm-12 col-lg-9 my-2 py-2'>
                Effort Between {' :  '}
                <input style={{border:'1px #0275d8 solid', borderRadius:'25px', outline:'none'}} name='minEffort' value={minEffort} type='number' onChange={handleSelectionChange}/>
                {' - '}
                <input style={{border:'1px #0275d8 solid', borderRadius:'25px', outline:'none'}} name='maxEffort' value={maxEffort} type='number' onChange={handleSelectionChange}/>
                {'    '}
                <button className='btn btn-primary' onClick={applyFilter}>Apply</button>
                {' <=> '}
                <button className='btn btn-warning' onClick={resetFilter}>reset</button>
              </div>
        </div>
        </div>
      )
    }
import React, { useEffect, useState } from 'react'

export default function IssueFilter ({setMinEf, setMaxEf, setSt, St, MaxEf, MinEf, applyload}){ 
  const [minEffort, setMinEffort] = useState('');
  const [maxEffort, setMaxEffort] = useState('')
  const [status, setStatus] = useState('')
 useEffect(() =>{
   setMaxEffort(MaxEf)
   setMinEffort(MinEf)
   setStatus(St)
 })
      const handleSelectionChange = (e) =>{
        console.log(e.target.name, e.target.value)
        if(e.target.name === 'minEffort'){
          setMinEf(Number(e.target.value))
        }
        if(e.target.name === 'maxEffort'){
          setMaxEf(Number(e.target.value))
        }
        if(e.target.name === 'status'){
          setSt(e.target.value)
        }
        
      }
      const resetFilter = () =>{
        setMaxEffort('');
        setMinEffort('');
        setStatus('')
        history.push('/issues')
      }
      const applyFilter = () =>{
        applyload()
      }
      return (
        <div className='container-fluid'>
          <div className='row my-2 py-1'> 
            <div className='col-sm-12 col-lg-6 my-2'>
            status : 
            { ' '}
              <select value={status} style={{border:'1px #0275d8 solid', borderRadius:'25px', outline:'none', width:'200px', height:'40px'}} name='status' onChange={handleSelectionChange} >
                <option value="">All</option>
                <option value="New">New</option>
                <option value="Assigned">Assigned</option>
                <option value="Fixed">Fixed</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
             
              <div className='col-sm-12 col-lg-6 my-2'>
                Effort Between {' :  '}
                <input style={{border:'1px #0275d8 solid', borderRadius:'25px', outline:'none',width:'100px', height:'40px'}} 
                name='minEffort' value={minEffort} type='number' onChange={handleSelectionChange}/>
                {' - '}
                <input style={{border:'1px #0275d8 solid', borderRadius:'25px', outline:'none',width:'100px', height:'40px'}} 
                name='maxEffort' value={maxEffort} type='number' onChange={handleSelectionChange}/>
                {'    '}
                <button className='btn btn-primary btn-lg' onClick={applyFilter}>Apply</button>
                {'  '}
                <button className='btn btn-warning btn-lg' onClick={resetFilter}>reset</button>
                
              </div>
        </div>
        </div>
      )
    }
import React, { useState } from 'react'
 import AsyncSelect from 'react-select/async'

 export default function Select (){
     const [searchValue, setSearchValue] = useState('')
    const loadData = () =>{
    
    }
    const handleChange = (newValue) =>{
        
    }
    return(
        <AsyncSelect cacheOptions loadOptions={loadData} defaultOptions onInputChange={handleChange} />
    )
 }
import React, { useEffect, useState } from 'react'

export default function NumberInput(props){
    //const {value,onchange} = props
    //console.log(value)
    //const [numValue, setValue] = useState(0);
    useEffect(() =>{
        console.log(props)
        setValue(props.value)
    })
    //console.log(numValue)
    const handleOnchange = (e) =>{
        setValue(e.target.value)
    }
    const handleOnBlur = (e) =>{
        console.log(e.target.value)
        props.onchange(e, e.target.value)
    }
    return (
        <>
            <input value={props.value} onChange={handleOnchange} type='number' onBlur={handleOnBlur}/>
        </>
    )
}
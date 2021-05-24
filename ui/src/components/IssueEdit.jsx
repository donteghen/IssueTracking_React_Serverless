import React from 'react'


export default function IssueEdit ({match}){
    const id = match.params.id;
    return (
        <div>
            <p>This is the issue's id:{id}</p>
        </div>
    )
}
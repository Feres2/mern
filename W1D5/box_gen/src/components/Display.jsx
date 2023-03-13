import React from 'react'

const Display = (props) => {
    return (
        <>
        <div>
            <ul>
            <li style={{color:props.color}}>{props.color}</li>
        </ul>


        </div>
        
        </>
    )
}

export default Display
import React, { useState } from 'react'

const ColorForm = (props) => {
        const [input,setInput]=useState("")
        const submitInput=(e)=>{
            e.preventDefault()
            props.fn(input)
        }
    return (
        <fieldset>
            <legend>ColorForm</legend>
                <h1>Create color</h1>
                <form onSubmit={(e)=>{submitInput(e)}}>
                    <label >
                        <input onChange={(e)=>{setInput(e.target.value)}}/>
                        <button>ADD</button>
                    </label>
                </form>
        </fieldset>
    )
}

export default ColorForm
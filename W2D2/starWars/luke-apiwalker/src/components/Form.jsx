import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'


const Form = (props) => {


    const [type, setType] = useState("")
    const [warId, setWarId] = useState()
    const nav = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        nav(`/${type}/${warId}`)


    }
    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label><h1>Searching for:</h1></label>
                <select onChange={(e) => {
                    setType(e.target.value)
                }}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label><h1>ID:</h1></label>
                <input type="number" min="1" onChange={(e) => {
                    setWarId(e.target.value)
                }} />
                <button>go</button>
            </form>

        </div>
    )
}

export default Form
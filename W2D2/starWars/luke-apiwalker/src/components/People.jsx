import React, {useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

const People = (props) => {
const {peopleId} = useParams()
const [people, setPeople] = useState('')
useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/${peopleId}/?format=json`)
    .then(res=>{
        setPeople(res.data)
    })
    .catch(err => {
        console.log("check pleassse",err);
    })
},[peopleId])


    return (
        <div>
            <h3>{people.name}</h3>
            <p><h5>height:</h5>{people.height}cm
            <br />
            <h5>Mass:</h5>{people.mass}kg
            <br />
            <h5>Hair Color:</h5>{people.hair_color}
            <br />
            <h5>Skin Color:</h5>{people.skin_color}
            </p>
        </div>
    )
}

export default People
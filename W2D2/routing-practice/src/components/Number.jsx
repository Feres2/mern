import React from 'react'
import { useParams } from 'react-router-dom'
import Home from './Home';

const Number = (props) => {
    const {num}=useParams();
    const {color}=useParams();
    const {bColor}=useParams();
    
    return (
        <>
        <div style={{backgroundColor:bColor}}><h1 style={{color:color}}>This number is :{num}</h1></div>
        { isNaN(num) ?(<Number />)  :null }
        </>
    )
}

export default Number
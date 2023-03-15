import React from 'react'
import { useParams } from 'react-router-dom'


const String = (props) => {
    const {str}=useParams();
    const {color}=useParams();
    const {bColor}=useParams();
    
    return (
        <>
        <div style={{backgroundColor:bColor}}><h1 style={{color:color}}>This word is :{str}</h1></div>
        { !isNaN(str) ?(<String />)  :null }
        </>
    )
}

export default String
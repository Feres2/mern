import React, { useState } from 'react'
import './TodoList.css'



const TodoList = () => {
    const [content, setContent] = useState("");
    const [tasks, setTasks] = useState([]);
    //! Add task
    const submitHandler = e =>{
        e.preventDefault();
        setTasks([...tasks,{content, id: new Date().getTime().toString(), isCompleted: false }])
        setContent('')
    }
    return (
        <div className='main'>
            <div className='form'>
                <form onSubmit={submitHandler} >
                    <input type="text" placeholder='add new task' value={content} onChange={e => setContent(e.target.value)} />
                    <input type="submit" value='Add' />
                </form>
            </div>
            <div className='tasks'>
                {tasks.map(tasks => {
                    return <div className="task">
                        <p style={}>{tasks.content}</p>
                        <input type="checkbox" className='check-test' onChange={()=>{
                            setTasks()
                        }}/>
                        <button>Delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TodoList
import React, { useState } from 'react'
import axios from 'axios';




const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [discription, setDescription] = useState("");


    const onSubmitHandler = e => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            discription

        }
        console.log(newProduct);
        axios.post("http://localhost:8000/api/manager", newProduct)
            .then((res) => { console.log("✅ SUCCESS from SERVER", res.data) })
            .catch(err => console.log("❌ e5dem svp", err))
    }
    return (
        <div>
            <h1>Product Manger</h1>
            <form onSubmit={onSubmitHandler} >
                <label >Title</label>
                <input onChange={(e) => { setTitle(e.target.value) }} value={title} />
                <label  >Price:</label>
                <input type="number" onChange={(e) => { setPrice(e.target.value) }} value={price} />
                <label >Description:</label>
                <input onChange={(e) => { setDescription(e.target.value) }} value={discription} />
                <button>Create</button>
            </form>

        </div>
    )
}

export default Form
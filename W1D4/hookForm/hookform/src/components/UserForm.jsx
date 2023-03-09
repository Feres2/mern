import React, { useState } from 'react';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword]=useState("");



    return (
        <>
        <form >
            <div>
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={(e) => setConfirmpassword(e.target.value)} />
            </div>
            <div>
                <p>Username: {username}</p>
                <p>Email Address:{email}</p>
                <p>Password:{password}</p>
                <p>Confirm Password:{confirmpassword}</p>
            </div>
        </form>
        
        </>
    );
};

export default UserForm;

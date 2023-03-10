import React, { useState } from 'react';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword]=useState("");
    const [usernameError, setUsernameError]=useState("");
    const [emailError, setEmailError]=useState("");
    const [passwordError, setPasswordError]=useState("");
    const [confirmpasswordError, setConfirmpasswordError]=useState("");
    const handleUsername =(e)=>{
        setUsername(e.target.value);
        if (e.target.value.length<2){
            setUsernameError("UserName must be more than 2 characters")
        }
        else{
            setUsernameError("")
        }
    }
    const handleEmail =(e)=>{
        setEmail(e.target.value);
        if (e.target.value.length<2){
            setEmailError("Email must be more than 2 characters")
        }
        else{
            setEmailError("")
        }
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value);
        if (e.target.value.length<8){
            setPasswordError("Password must be more than 8 characters")
        }
        else{
            setPasswordError("")
        }
    }
    const handleConfirmpassword =(e)=>{
        setConfirmpassword(e.target.value);
        if (e.target.value != password){
            setConfirmpasswordError("Confirm Password must match password")
        }
        else{
            setConfirmpasswordError("")
        }
    }



    return (
        <>
        <form >
            <div>
                <label>Username: </label>
                <input type="text" onChange={handleUsername} />
                {
                    usernameError ?
                    <p style={{color:'red'}}>{ usernameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={handleEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={handlePassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={handleConfirmpassword} />
                {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
            </div>
        </form>
        
        </>
    );
};

export default UserForm;

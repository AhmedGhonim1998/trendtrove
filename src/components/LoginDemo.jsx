import React from 'react'
import { Button } from 'react-bootstrap'
import { GoogleAuthProvider, signInWithPopup , getAuth } from "firebase/auth";
import app from "../firebase/firebase.config"


const provider = new GoogleAuthProvider();
const auth = getAuth();
const LoginDemo = () => {
    const handleLogin = () => {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            alert("Login successfully Done")
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ...
        });
    }
    return (
        <>
            <div className='m-5 pt-5'>
                <Button className='bg-primary px-4 text-white' variant='primary' onClick={handleLogin}>login</Button>
            </div>
        </>
    )
}

export default LoginDemo
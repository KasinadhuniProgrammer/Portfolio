import React from 'react';
import './Login.css';
import FRESHMANYEARFIRSTIMAGE from './FRESHMANYEARFIRSTIMAGE.jpg';

import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";  

function Login() {
    const [state, dispatch] = useStateValue(); 

    const logIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => {
                alert(error.message)
            })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src={FRESHMANYEARFIRSTIMAGE} alt=""/>
                <h1>Hello, I am Satvik, welcome to my website!</h1>
                <Button onClick={logIn}>Sign in with Google</Button>

            </div>
        </div>
    );

}

export default Login;
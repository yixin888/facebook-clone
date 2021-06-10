import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in
        auth.signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="http://www.duneworks.nl/wp-content/uploads/2021/03/Lightness_Logo.png" 
                alt="" 
                />

            </div>

            <Button type="submit" onClick={signIn}>
                Sign In 
            </Button>

        </div>
    );
}

export default Login;

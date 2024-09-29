import React, { useContext } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import logo from '../../images/logo.png';
import './login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import firebaseConfig from '../Firebase/firebase.config';
import { MyContext } from '../../App';
firebase.initializeApp(firebaseConfig)


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const handleGoogleSingIN = () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const userInfo = { name: displayName, email, photoURL };
                setLoggedInUser(userInfo);
                storeToken(result.user);
            }).catch((error) => {
                console.log(error.code)
            });
    }

    const storeToken = async (user) => {
        user.getIdToken(/* forceRefresh */ true)
            .then(idToken => {
                sessionStorage.setItem('token', idToken);
                navigate(from);
            }).catch(error => {
                console.log(error)
            });
    }



    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-md-3 m-auto text-center">
                    <img src={logo} className='img-fluid login-logo' alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 col-sm-5 col-lg-5 m-auto text-center border border-secondary rounded py-5 px-4">
                    <h3 className="fs-4">Login With</h3>
                    <br />
                    <Button onClick={handleGoogleSingIN} variant="outlined" color='dark' style={{ borderRadius: '30px', width: '85%' }} className='mb-2' startIcon={<GoogleIcon />}>Continue With Google</Button>
                    <p>Don't have an account?<Link to={'/sign-up'} className='text-primary'>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
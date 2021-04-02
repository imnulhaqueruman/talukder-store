import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  const history =useHistory()
  const location = useLocation()

  const { from } = location.state || { from: { pathname: "/" } };


  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const handleGoogleSignIn = () =>{
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log(result)
    const{displayName,email} = result.user;
    const signedInUser = {name:displayName, email};
    setLoggedInUser(signedInUser)
    history.replace(from)

   
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
   
  });
    }
    return (
        <div>
            <h1>This is Google SIgn In </h1>
            <button onClick={handleGoogleSignIn}>Google Sign in </button>
        </div>
    );
};

export default Login;
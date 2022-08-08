
import './App.css';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import fire from "./fire";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './Components/navbar';
import SignUp from './Components/login';

import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [signUpBtn, setSignUpBtn] = useState("Sign up");
  const [logInBtn, setLogInBtn] = useState("Log in");

  let firebaseAuth = getAuth();
const clearInputs = () => {
  setEmail('');
  setPassword('');
}

const clearErrors = () => {
  setEmailError("");
  setPasswordError("");
}

const handleLogin = () => {
  clearErrors();
  signInWithEmailAndPassword(firebaseAuth, email, password).catch((err) => {
    setLogInBtn("Log in")
    switch (err.code) {
      case "auth/invalid-email":
        setEmailError("Please Enter Email");
      case "auth/user-disabled":
        setEmailError("User disabled");
      case "auth/user-not-found":
        setEmailError("user not found");

        break;
      case "auth/wrong-password":
        setPasswordError("wrong password");
        break;
    }
  });
};

const handleSignUp = () => {
  clearErrors();
  createUserWithEmailAndPassword(firebaseAuth, email, password).catch((err) => {
    setSignUpBtn("Sign up");
    switch (err.code) {
      case "auth/email-already-in-use":
        setEmailError("User already exists");
      case "auth/invalid-email":
        setEmailError("Please Enter correct email");

        break;
      case "auth/weak-password":
        setPasswordError("Weak password");
        break;
    }
  });
};

const handleLogOut = () => {
  signOut(firebaseAuth);
};
const authListener = () => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      clearInputs();
      setUser(user);
    } else {
      setUser("");
    }
  });
};

useEffect(() => {
  authListener();
}, []);




  return (
    <div className="App">
      {user ? (
        <NavBar
          handleLogOut={handleLogOut}
          setSignUpBtn={setSignUpBtn}
          setLogInBtn={setLogInBtn}
        />
      ) : (
        <SignUp
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          emailError={emailError}
          passwordError={passwordError}
          setHasAccount={setHasAccount}
          signUpBtn={signUpBtn}
          logInBtn={logInBtn}
          setSignUpBtn={setSignUpBtn}
          setLogInBtn={setLogInBtn}
        />
      )}
    </div>
  );
}

export default App;

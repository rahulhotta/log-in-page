import React, {useState} from 'react'
import './login.css'
function login({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignUp,
  hasAccount,
  emailError,
  passwordError,
  setHasAccount,
  signUpBtn,
  logInBtn,
  setSignUpBtn,
  setLogInBtn,
}) {
  function handleSubmit(e) {
    e.preventDefaults();
  }
  function signInClickHandler() {
    handleLogin();
    setLogInBtn("Loading...");
  }
  function signUpClickHandler() {
    handleSignUp();
    setSignUpBtn("Loading...");
  }

  
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Email</label>
        <input
          type="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={signInClickHandler}>{logInBtn}</button>
              <p>
                Don't have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={signUpClickHandler}>{signUpBtn}</button>
              <p>
                Have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default login
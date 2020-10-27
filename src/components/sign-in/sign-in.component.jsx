import React, { useState } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CostumButton from "../costum-button/costum-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={(e) => setEmail(e.target.value)}
          label="email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={(e) => setPassword(e.target.value)}
          label="password"
        />
        <div className="buttons">
          <CostumButton type="submit">Sign In</CostumButton>
          <CostumButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CostumButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

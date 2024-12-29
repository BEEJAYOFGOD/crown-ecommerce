/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomBtn from "../custom-btn/custom-btn.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            value={email}
            handleChange={(event) => {
              setEmail(event.target.value);
            }}
            required
            label="email"
          />

          <FormInput
            value={password}
            handleChange={(event) => {
              setPassword(event.target.value);
            }}
            label="password"
            required
          />
          <br />
          <div className="buttons">
            <CustomBtn type="submit">Sign In</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGgoogleSignIn={true}>
              Sign In With Google
            </CustomBtn>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;

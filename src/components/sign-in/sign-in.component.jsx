/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
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
            name="email"
            type="email"
            value={email}
            handleChange={(event) => {
              setEmail(event.target.value);
            }}
            required
            label="email"
          />
          <label htmlFor="email">Email</label>
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={(event) => {
              setPassword(event.target.value);
            }}
            label="password"
            required
          />
          <label htmlFor="password">password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    </>
  );
};

export default SignIn;

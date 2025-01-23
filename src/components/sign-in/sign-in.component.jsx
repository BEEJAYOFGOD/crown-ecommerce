/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomBtn from "../custom-btn/custom-btn.component";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import Spinner from "../loading-spinner/loading-spinner.component";
import { replace, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isPending: false,
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormData({ ...formData, isPending: true });

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setFormData({ email: "", password: "", isPending: false });
      navigate("/", { replace });

      alert("sign in successful");
    } catch (error) {
      alert(error.message);
      setFormData({ ...formData, isPending: false });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name={"email"}
            value={email}
            handleChange={handleChange}
            required
            label="email"
          />

          <FormInput
            type={"password"}
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />
          {/* <span
            onClick={() => {
              type == "password" ? setType("text") : setType("password");
            }}
          >
            ad3
          </span> */}

          <div className="buttons">
            <CustomBtn type="submit">
              {formData.isPending ? <Spinner /> : null} Sign In
            </CustomBtn>
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

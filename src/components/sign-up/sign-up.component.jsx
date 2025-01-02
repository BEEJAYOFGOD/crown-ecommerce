import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils"; // Ensure Firebase is initialized here
import FormInput from "../form-input/form-input.component";
import CustomBtn from "../custom-btn/custom-btn.component";
import "./sign-up.styles.scss";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { useState } from "react";
import Spinner from "../loading-spinner/loading-spinner.component";

const SignUp = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    pending: false,
  });

  const { displayName, email, password, confirmPassword } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      setFormData({ ...formData, pending: true });
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // If you have a function to save additional user data, call it here
      await createUserProfileDocument(userCredential.user, { displayName });

      // Clear inputs after successful sign-up
      setFormData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        pending: false,
      });

      alert("Sign-up successful!");
    } catch (error) {
      console.error("Error during sign-up:", error.message);
      setFormData({ ...formData, pending: false });
      alert(error.message); // Show user-friendly error message
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomBtn type="submit">
          {formData.pending ? <Spinner /> : null}
          <span>Sign Up</span>
        </CustomBtn>
      </form>
    </div>
  );
};

export default SignUp;

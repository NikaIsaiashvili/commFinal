import * as styles from "./SignUp.module.css";
import { useState } from "react";
import { CreateUser } from "../../https/CreateUser";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../config/routes";

function SignUpComponent() {
  const [userData, setUserData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });

  const navigate = useNavigate();

  function InputHandler(e) {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function SubmitHandler(e) {
    e.preventDefault();
    try {
      await CreateUser(userData);
      navigate(`/${ROUTES.SIGN_IN}`, {state: { success: true }});
    } catch (error) {
      alert("ERROR IS... : " + error);
    }
  }

  return (
    <section>
      <div className={styles.SignUpContainer}>
        <form>
          <h1 className={styles.SignUpText}>Sign Up</h1>

          <div className={styles.BorderBottom}></div>
          <div className={styles.SignUpInputContainer}>
            <label
              htmlFor={styles.InputName}
              className={styles.SignUpLabelName}
            >
              Your Name
              <input
                type="text"
                name="firstName"
                id={styles.InputName}
                onChange={InputHandler}
                required
              ></input>
            </label>
            <label
              htmlFor={styles.InputLastName}
              className={styles.SignUpLabelLastName}
            >
              Your Lastname
              <input
                type="text"
                name="lastName"
                id={styles.InputLastName}
                onChange={InputHandler}
                required
              ></input>
            </label>

            <label
              htmlFor={styles.InputUserName}
              className={styles.SignUpLabelUserName}
            >
              Your Username
              <input
                type="text"
                name="username"
                id={styles.InputUserName}
                onChange={InputHandler}
                required
              ></input>
            </label>
            <label
              htmlFor={styles.InputEmail}
              className={styles.SignUpLabelEmail}
            >
              Your Email
              <input
                type="email"
                name="email"
                id={styles.InputEmail}
                onChange={InputHandler}
                required
              ></input>
            </label>
            <label
              htmlFor={styles.InputAge}
              className={styles.SignUpLabelEmail}
            >
              Your Age
              <input
                type="date"
                name="birthDate"
                id={styles.InputAge}
                onChange={InputHandler}
                required
              ></input>
            </label>
            <label
              htmlFor={styles.InputPassword}
              className={styles.SignUpLabelPassword}
            >
              Your Password
              <input
                type="password"
                name="password"
                id={styles.InputPassword}
                onChange={InputHandler}
                required
              ></input>
            </label>

            <div className={styles.BorderTop}></div>
            <button className={styles.SignUpBtn} onClick={SubmitHandler}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUpComponent;

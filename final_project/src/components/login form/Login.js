import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import ROUTES from "../../config/routes";
import * as styles from "./Login.module.css";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <section className={styles.SectionLogIn}>
      <div className={styles.LogInContainer}>
        <form method="post" onSubmit={handleSubmit} >
          <h1 className={styles.LogInText}>Logging In</h1>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <button className={styles.LogInBtn} >
            Log In
          </button>
          <div className={styles.BorderTop}>
            <Link to={`/${ROUTES.SIGN_UP}`}>
              <button className={styles.SignUpBtn}> Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LogIn;

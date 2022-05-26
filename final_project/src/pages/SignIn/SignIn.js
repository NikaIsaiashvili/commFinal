import LogIn from "../../components/login form/Login";
import styles from "./SignPage.module.css"
import { useLocation } from "react-router-dom";

function SignIn() {
  const { state } = useLocation();
  return (
    <>
      {state?.success && <h1 className={styles.SignInText}>Sign up was successful</h1>}
    <LogIn />
    </>
  )
}

export default SignIn;

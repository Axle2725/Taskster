import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";

import axios from "../api/axios";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const LOGIN_URL = "/auth";

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/dashboard"> Go to Home</Link>
          </p>
        </section>
      ) : (
        <section className={styles.container}>
          <p
            ref={errRef}
            className={errMsg ? styles.errmsg : styles.offscreen}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className={styles.header}>
            <h1 className={styles.text}>Sign In</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.input}>
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <button className={styles.submit}>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className={styles.line}>
              <Link className={styles.Link} to="/register">
                Sign Up
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
}

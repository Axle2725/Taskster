import {
  FaCheck,
  FaEnvelope,
  FaInfoCircle,
  FaLock,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$$%]).{8,24}$/;
const USER_REGEX = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGISTER_URL = "/register";

export default function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    //used to test if the user name is valid according to the USER_REGEX defined
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //If button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      console.log(JSON.stringify(response));
      setSuccess(true);
      // clear input field
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <Link to="/login">Sign In</Link>
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
            <div className={styles.text}>Sign Up</div>
            <div className={styles.underline}></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <label htmlFor="fullname">
                <FaUser className={styles.user} />
                Full Name:
                <span className={validName ? styles.valid : styles.hidden}>
                  <FaCheck />
                </span>
                <span
                  className={
                    validName || !user ? styles.hidden : styles.invalid
                  }
                >
                  <FaTimes />
                </span>
              </label>

              <div className={styles.input}>
                <input
                  type="text"
                  id="fullname"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />

                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? styles.instructions
                      : styles.hidden
                  }
                >
                  <FaInfoCircle />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                </p>
              </div>

              <label htmlFor="email">
                <FaEnvelope className={styles.enve} />
                Email:
                <span className={validEmail ? styles.valid : styles.hidden}>
                  <FaCheck />
                </span>
                <span
                  className={
                    validEmail || !email ? styles.hidden : styles.invalid
                  }
                >
                  <FaTimes />
                </span>
              </label>
              <div className={styles.input}>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                  placeholder="example@domain.com"
                />
              </div>

              <label htmlFor="password">
                <FaLock className={styles.lock} />
                Password:
                <span className={validPwd ? styles.valid : styles.hidden}>
                  <FaCheck />
                </span>
                <span
                  className={validPwd || !pwd ? styles.hidden : styles.invalid}
                >
                  <FaTimes />
                </span>
              </label>

              <div className={styles.input}>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  placeholder="Password"
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? styles.instructions : styles.hidden
                  }
                >
                  <FaInfoCircle />
                  8 to 24 characters. <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>
              </div>

              <label htmlFor="confirm_pwd">
                <FaLock className={styles.lock} />
                Confirm Password:
                <span
                  className={
                    validMatch && matchPwd ? styles.valid : styles.hidden
                  }
                >
                  <FaCheck />
                </span>
                <span
                  className={
                    validMatch || !matchPwd ? styles.hidden : styles.invalid
                  }
                >
                  <FaTimes />
                </span>
              </label>

              <div className={styles.input}>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <br />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch
                      ? styles.instructions
                      : styles.hidden
                  }
                >
                  <FaInfoCircle />
                  Must match the first password.
                </p>
              </div>

              <div>
                {/*className={styles.submit-container}> */}
                <button
                  disabled={
                    !validName || !validEmail || !validPwd || !validMatch
                      ? true
                      : false
                  }
                  className={styles.submit}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <p>
            Already registered?
            <br />
            <span>
              <Link className={styles.Link} to="/login">
                Sign In
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
}

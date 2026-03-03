import {
  FaCheck,
  FaEnvelope,
  FaInfoCircle,
  FaLock,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import "./Register.css";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$$%]).{8,24}$/;
const USER_REGEX = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form>
        <div className="inputs">
          <FaUser className="user" />
          <label htmlFor="fullname">
            Full Name:
            <span className={validName ? "valid" : "hidden"}>
              <FaCheck />
            </span>
            <span className={validName || !user ? "hidden" : "invalid"}>
              <FaTimes />
            </span>
          </label>

          <div className="input">
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
                userFocus && user && !validName ? "instructions" : "hidden"
              }
            >
              <FaInfoCircle />
              4 to 24 characters.
              <br />
              Must begin with a letter.
            </p>
          </div>

          <label htmlFor="email">
            <FaEnvelope className="enve" />
            Email:
            <span className={validEmail ? "valid" : "hidden"}>
              <FaCheck />
            </span>
            <span className={validEmail || !email ? "hidden" : "invalid"}>
              <FaTimes />
            </span>
          </label>
          <div className="input">
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
              placeholder="Email Id"
            />
          </div>

          <label htmlFor="password">
            <FaLock className="lock" />
            Password:
            <span className={validPwd ? "valid" : "hidden"}>
              <FaCheck />
            </span>
            <span className={validPwd || !pwd ? "hidden" : "invalid"}>
              <FaTimes />
            </span>
          </label>

          <div className="input">
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
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
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
            Confirm Password:
            <span className={validMatch && matchPwd ? "valid" : "hidden"}>
              <FaCheck />
            </span>
            <span className={validMatch || !matchPwd ? "hidden" : "invalid"}>
              <FaTimes />
            </span>
          </label>

          <div className="input">
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
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />
              Must match the first password.
            </p>
          </div>

          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>

          <div className="submit-container">
            <button className="submit">Sign Up</button>
            <button className="submit">Log In</button>
          </div>
        </div>
      </form>
    </section>
  );
}

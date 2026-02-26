import {
  FaCheck,
  FaEnvelope,
  FaInfoCircle,
  FaLock,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
//import "./Register.css";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$$%]).{8,24}$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z]{3,23}$/;

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
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <div className="container">
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
          <div className="input">
            <FaUser className="user" />
            <label htmlFor="fullname">
              Full Name:
              <span className={validName ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validName || !user ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
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
                userFocus && user && !validName ? "instruction" : "offscreen"
              }
            >
              <FaInfoCircle />
              4 to 24 characters.
              <br />
              Must begin with a letter.
            </p>
          </div>
          <div className="input">
            <FaEnvelope className="enve" />
            <input type="email" placeholder="Email Id" />
          </div>
          <div className="input">
            <FaLock className="lock" />
            <input type="password" placeholder="Password" />
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
    </div>
  );
}

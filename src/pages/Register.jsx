import { FaEnvelope, FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import "./Register.css";

export default function Register() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <FaUser />
          <input type="text" />
        </div>
        <div className="input">
          <FaEnvelope />
          <input type="email" />
        </div>
        <div className="input">
          <FaKey />
          <input type="password" />
        </div>

        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>

        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Log In</div>
        </div>
      </div>
    </div>
  );
}

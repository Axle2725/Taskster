import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Taskster</div>
      <nav>
        <a href="#features">Features</a>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Manage Your Tasks Smarter</h1>
        <p>
          Taskster helps you stay productive, organized, and focused. Plan your
          day, track progress, and achieve your goals effortlessly.
        </p>
        <Link to="/taskpage">
          <button className="btn btn-primary">Get Started</button>
        </Link>
      </div>

      <div className="hero-image">
        <div className="mockup">
          <div className="task">
            Design Landing Page <span>✔</span>
          </div>
          <div className="task">
            Finish React Project <span>⏳</span>
          </div>
          <div className="task">
            Team Meeting at 3PM <span>📅</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

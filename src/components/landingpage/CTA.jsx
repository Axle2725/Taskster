import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">
      <h2>Start Organizing Today</h2>
      <Link to="/register">
        <button className="btn">Create Your Free Account</button>
      </Link>
    </section>
  );
}

export default CTA;

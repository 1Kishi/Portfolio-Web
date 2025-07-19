import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/portfolio" style={{ marginRight: "10px" }}>Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

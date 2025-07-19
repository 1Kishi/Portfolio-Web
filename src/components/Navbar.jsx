import { Link } from "react-router-dom";

function toggleTheme() {
  console.log("Toggle theme clicked");
}


function Navbar() {

  
  return (
    <nav className="w-full px-4 py-3 bg-white dark:bg-charcoal border-b border-neutral-300 dark:border-mutedRose shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Name */}
        <Link to="/" className="text-neonPink font-bold text-lg">Jacob Green</Link>
        
        {/* Center: Links */}
        <ul className="flex gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-100">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        {/* Right: Theme toggle */}
        <button
          onClick={toggleTheme}
          className="text-sm px-3 py-1 border rounded-md dark:border-neutral-500"
        >
          Toggle Theme
        </button>

      </div>
    </nav>
  );
}

export default Navbar;

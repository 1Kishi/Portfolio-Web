import { Link } from "react-router-dom";
import useDarkMode from '../hooks/useDarkMode';

function toggleTheme() {
  console.log("Toggle theme clicked");
}


const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode(); 

  
  return (
    <nav className="w-full px-4 py-3 bg-white dark:bg-charcoal border-b border-neutral-300 dark:border-mutedRose shadow-sm transition-colors duration-300"> 
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link to="/" className="text-neonPink font-bold text-lg">Jacob Green</Link>
        
        <ul className="flex gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-100">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        <button onClick={toggleDarkMode}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>


      </div>
    </nav>
  );
}

export default Navbar;

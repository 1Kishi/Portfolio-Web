import { Link } from "react-router-dom";
import useDarkMode from '../hooks/useDarkMode';

function toggleTheme() {
  console.log("Toggle theme clicked");
}


const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode(); 

  
  return (
          <nav className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-neutral-300 dark:border-mutedRose text-black dark:text-white shadow-sm transition-colors duration-300 ease-in-out">
            <div className="max-w-7,x1 mx-auto grid grid-cols-3 items-center">
  
            
            <Link to="/" className="text-neutral-800 dark:text-neutral-100 font-bold text-lg">
              Jacob Green
            </Link>

            
            <ul className="flex gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-100 justify-self-center">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            
            <button onClick={toggleDarkMode} className="justify-self-end">
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>

          </div>

          </nav>
  );
}

export default Navbar;

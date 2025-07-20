import { Link } from "react-router-dom";
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode(); 

  return (
    <nav className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-neutral-300 dark:border-mutedRose text-black dark:text-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-[0_0_12px_#ff69f0]">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        
        <Link to="/" className="text-neutral-800 dark:text-neutral-100 font-bold text-lg">
          Jacob Green
        </Link>

        <ul className="flex gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-100 justify-self-center">
          <li><Link to="/">Domov</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">O mně</Link></li>
        </ul>

        <button onClick={toggleDarkMode} className="justify-self-end">
          {isDark ? '✹ Light' : '࣪ ִֶָ☾. Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

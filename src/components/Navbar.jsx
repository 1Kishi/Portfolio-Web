import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 dark:border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-pink-500">MyPortfolio</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-sm font-medium px-3 py-1 rounded-md transition duration-300 
                  ${
                    location.pathname === item.path
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'hover:bg-pink-500/20 dark:hover:bg-pink-500/30 hover:text-pink-500 dark:hover:text-pink-400'
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

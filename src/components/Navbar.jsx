import { Link } from "react-router-dom";
import useDarkMode from '../hooks/useDarkMode';
import { useLanguage } from '../context/LanguageContext'; 

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { t, toggleLang, lang } = useLanguage(); 

  return (
    <nav className="w-full px-4 py-3 fixed top-0 z-50 bg-white/60 dark:bg-[#141414]/60 backdrop-blur-xl border-b-2 border-white/40 dark:border-white/10 text-black dark:text-white shadow-md hover:shadow-[0_0_12px_#ff69f0] transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-neutral-800 dark:text-neutral-100 font-bold text-lg">
          {t('home_title')}
        </Link>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-100 justify-center flex-grow">
          <li><Link to="/">{t('nav_home')}</Link></li>
          <li><Link to="/portfolio">{t('nav_portfolio')}</Link></li>
          <li><Link to="/about">{t('nav_about')}</Link></li>
        </ul>

        <div className="flex gap-3 items-center justify-self-end">
          <button onClick={toggleDarkMode}>
            {isDark ? '✹ Light' : '࣪ ִֶָ☾. Dark'}
          </button>

          <button onClick={toggleLang}>
            {lang === 'cz' ? 'CZ' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

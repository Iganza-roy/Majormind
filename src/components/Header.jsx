import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';
import whiteLogo from '../assets/white.png';
import blueLogo from '../assets/blue.png';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`w-full px-6 py-4 `}>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <img
            src={isDarkMode ? whiteLogo : blueLogo}
            alt='Majormind Logo'
            className='h-12 w-auto'
          />
        </div>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors duration-200  ${
            isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100 '
          }`}
          aria-label='Toggle theme'
        >
          {isDarkMode ? (
            <HiSun className='w-5 h-5 text-white' />
          ) : (
            <HiMoon className='w-5 h-5 text-gray-600' />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

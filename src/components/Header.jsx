import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';
import whiteLogo from '../assets/white.png';
import blueLogo from '../assets/blue.png';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className={`w-full px-6 py-4 border-b ${
        isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
      }`}
    >
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
          className={`p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isDarkMode
              ? 'bg-gray-800 hover:bg-gray-700 focus:ring-offset-gray-900'
              : 'bg-gray-100 hover:bg-gray-200 focus:ring-offset-white'
          }`}
          aria-label='Toggle theme'
        >
          {isDarkMode ? (
            <HiSun className='w-5 h-5 text-yellow-500' />
          ) : (
            <HiMoon className='w-5 h-5 text-gray-600' />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

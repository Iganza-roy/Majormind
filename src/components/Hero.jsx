import React from 'react';
import { Spotlight } from './ui/spotlight';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className='h-screen w-full relative flex items-center justify-center overflow-hidden'>
      {/* Background */}
      <div className={`absolute inset-0`}>
        <div className='absolute inset-0 bg-grid-white/[0.02] bg-grid-16' />
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
        {/* Main Heading with Gradient */}
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6'>
          <span
            className={`bg-gradient-to-br ${
              isDarkMode
                ? 'from-white via-gray-200 to-gray-400'
                : 'from-gray-900 via-gray-700 to-gray-600'
            } bg-clip-text text-transparent`}
          >
            Welcome to{' '}
          </span>
          <span
            className={`bg-gradient-to-br ${
              isDarkMode
                ? 'from-white via-gray-100 to-gray-300'
                : 'from-gray-800 via-gray-600 to-gray-500'
            } bg-clip-text text-transparent`}
          >
            Majormind
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl lg:text-2xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } max-w-3xl mx-auto leading-relaxed`}
        >
          Simplifying AI for everyday minds. We help you stay ahead through
          daily insights, tools, and automation know-how.
        </p>

        <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            className={`px-8 py-3 bg-gradient-to-r ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'
            }  font-semibold rounded-4xl transition-all duration-300 transform hover:scale-105 shadow-lg `}
          >
            Get Started
          </button>
          <button
            className={`px-8 py-3 bg-gradient-to-r ${
              isDarkMode ? 'bg-white text-gray-800' : 'bg-gray-200'
            } font-semibold rounded-4xl transition-all duration-300 transform hover:scale-105 shadow-lg `}
          >
            Contact us
          </button>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent' />
    </div>
  );
};

export default Hero;

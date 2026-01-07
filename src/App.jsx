import Header from './components/Header';
import { Spotlight } from './components/ui/spotlight';
import Hero from './components/Hero';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 opacity-'
        fill={isDarkMode ? 'white' : 'blue'}
      />
      <Header />
      <Hero />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

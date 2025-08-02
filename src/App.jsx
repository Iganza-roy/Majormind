import Header from './components/Header';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <Header />
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

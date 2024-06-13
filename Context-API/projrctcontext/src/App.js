// App.js
import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import ThemedComponent from './components/ThemedContext';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;




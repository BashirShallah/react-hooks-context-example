import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Login from './Login';
import ToggleTheme from './ToggleTheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <ToggleTheme />
        <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;

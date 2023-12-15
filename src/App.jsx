// App.js

import React, { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply basic styling for consistent cross-browser rendering */}
      <div style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;

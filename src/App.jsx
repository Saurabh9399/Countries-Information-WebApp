import { useState } from "react";
import Body from "./components/Body"
import Header from "./components/Header"
import { createTheme, ThemeProvider } from '@mui/material/styles';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });


  return (
    <ThemeProvider theme={theme}>
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
     <Body/>
    </ThemeProvider>
  )
}

export default App

// Header.js
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({darkMode,setDarkMode}) => {

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "black", fontWeight: "bold", marginLeft: 4, marginRight: 2 }}>
          Where in the world?
        </Typography>
        <IconButton color="black" onClick={handleDarkModeToggle} sx={{ marginLeft: 2, marginRight: 4 }}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
// Header.js
import PropTypes from 'prop-types'; 
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ darkMode, setDarkMode }) => {
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: darkMode ? '#212121' : 'white' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: darkMode ? 'white' : 'black', fontWeight: 'bold', marginLeft: 4, marginRight: 2 }}>
          Where in the world?
        </Typography>
        <IconButton color={darkMode ? 'inherit' : 'default'} onClick={handleDarkModeToggle} sx={{ marginLeft: 2, marginRight: 4 }}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};


export default Header;

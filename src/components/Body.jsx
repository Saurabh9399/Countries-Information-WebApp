// src/components/Body.jsx

import { Container, TextField, MenuItem, Grid, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import data from "../data.json";
import { useState } from 'react';
import { useTheme } from '@emotion/react';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];


const Body = () => {
  const [regionFilter, setRegionFilter] = useState('');
  const [searchText, setSearchText] = useState('');
  const theme = useTheme(); // Import useTheme from '@mui/system'

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={3}>
        {/* Search Box */}
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            placeholder="Search for the country..."
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ bgcolor: theme.palette.background.paper }} // Adjust background color
          />
        </Grid>

        {/* Spacer */}
        <Grid item xs={12} md={3} />

        {/* Region Dropdown */}
        <Grid item xs={12} md={3}>
          <TextField
            select
            fullWidth
            label="Filter by Region"
            variant="outlined"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            sx={{ bgcolor: theme.palette.background.paper }} // Adjust background color
          >
            <MenuItem value="">All Regions</MenuItem>
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Country Information Cards */}
        {data
          .filter((country) => (regionFilter ? country.region === regionFilter : true))
          .filter((country) => country.name.toLowerCase().includes(searchText.toLowerCase()))
          .map((country) => (
            <Grid item xs={12} md={3} key={country.name}>
              <Paper
                elevation={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'center',
                  height: '300px',
                  overflow: 'auto',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  width: '90%',
                  margin: 'auto',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  bgcolor: theme.palette.background.paper, // Adjust background color
                  color: theme.palette.text.primary, // Adjust text color
                }}
              >
                <img src={country.flags.svg} alt={`${country.name} Flag`} style={{ maxWidth: '100%', marginBottom: '12px' }} />
                <h2 style={{ margin: '0 0 8px 14px' }}>{country.name}</h2>
                <p style={{ margin: '0 0 4px 14px' }}>Population: {country.population}</p>
                <p style={{ margin: '0 0 4px 14px' }}>Region: {country.region}</p>
                <p style={{ margin: '0 0 0 14px' }}>Capital: {country.capital}</p>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Body;

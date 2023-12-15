// CountryCard.jsx

import { Container, Typography, Grid, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import data from "../data.json"

const CountryCard = () => {
  const { countryName } = useParams();

  const country = data.find(country => country.name === countryName);


  const getCountryName = (code) => {
    const borderCountry = data.find((c) => c.alpha3Code === code);
    return borderCountry ? borderCountry.name : '';
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary" sx={{ marginBottom: 2 }}>
          Back
        </Button>
      </Link>
      <Grid container spacing={3}>
        {/* Country Flag */}
        <Grid item xs={12} md={6}>
          <img src={country.flags.svg} alt={`${country.name} Flag`} style={{ width: '100%', borderRadius: '8px', height:"40vh" }} />
        </Grid>

        {/* Country Details */}
        <Grid item xs={12} md={6} >
          <Container>
            <Typography variant="h4" fontWeight="bold" sx={{ marginTop: 2, marginBottom:4 }}>
              {country.name}
            </Typography>
            {/* Other country details */}
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom:1 }}>
                  Native Name:<span style={{color:"grey"}}>{country.nativeName}</span>
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                  Population:<span style={{color:"grey"}}>{country.population}</span>
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                Region:<span style={{color:"grey"}}>{country.region}</span>
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                Sub Region:<span style={{color:"grey"}}>{country.subregion}</span>
            </Typography> <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
            Sub Region:<span style={{color:"grey"}}>{country.capital}</span>
        </Typography>



                {/* Other details */}
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                  Top Level Domain:<span style={{color:"grey"}}>{country.topLevelDomain.join(', ')}</span>
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                   Currencies:<span style={{color:"grey"}}>{country.currencies.map(item => <>{item.name}</>)}</span>
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                  Languages:<span style={{color:"grey"}}>{country.languages.map(item => <>{item.name}{","}</>)}</span>
                  </Typography>

                {/* Other details */}
              </Grid>
            </Grid>

            {/* Border Countries */}
            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1, marginTop: 2 }}>
              Border Countries:
            </Typography>
            {country.borders.map((border) => (
              <Button to={`/country/${getCountryName(border)}`} key={border} as={Link} style={{ textDecoration: 'none' }}>
                {getCountryName(border)}
                </Button>
            ))}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CountryCard;


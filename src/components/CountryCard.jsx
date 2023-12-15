// CountryCard.jsx

import { Container, Typography, Grid, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import data from "../data.json"

const CountryCard = () => {
  const { countryName } = useParams();

  console.log(countryName);

  const country = data.filter(country => country.area == countryName);

  console.log(country[0]);


  const getCountryName = (code) => {
    const borderCountry = data.find((c) => c.alpha3Code === code);
    return borderCountry ? borderCountry.name : '';
  };
  const getCountryArea = (code) => {
    const borderCountry = data.find((c) => c.alpha3Code === code);
    return borderCountry ? borderCountry.area : '';
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
          <img src={country[0].flags.svg} alt={`${country[0].name} Flag`} style={{ width: '100%', borderRadius: '8px', height:"40vh" }} />
        </Grid>

        {/* Country Details */}
        <Grid item xs={12} md={6} >
          <Container>
            <Typography variant="h4" fontWeight="bold" sx={{ marginTop: 2, marginBottom:4 }}>
              {country[0].name}
            </Typography>
            {/* Other country[0] details */}
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom:1 }}>
                  Native Name:<span style={{color:"grey"}}>{country[0].nativeName}</span>
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                  Population:<span style={{color:"grey"}}>{country[0].population}</span>
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                Region:<span style={{color:"grey"}}>{country[0].region}</span>
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                Sub Region:<span style={{color:"grey"}}>{country[0].subregion}</span>
            </Typography> <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
            Sub Region:<span style={{color:"grey"}}>{country[0].capital}</span>
        </Typography>



                {/* Other details */}
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                  Top Level Domain:<span style={{color:"grey"}}>{country[0].topLevelDomain.join(', ')}</span>
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                   Currencies:<span style={{color:"grey"}}>{country[0]?.currencies?.map(item => <>{item.name}</>)}</span>
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold',marginBottom:1 }}>
                  Languages:<span style={{color:"grey"}}>{country[0]?.languages?.map(item => <>{item.name}{","}</>)}</span>
                  </Typography>

                {/* Other details */}
              </Grid>
            </Grid>

            {/* Border Countries */}
            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1, marginTop: 2 }}>
              Border Countries:
            </Typography>
            {country[0]?.borders?.map((border) => (
              <Button to={`/country/${getCountryArea(border)}`} key={border} as={Link} style={{ textDecoration: 'none' }}>
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


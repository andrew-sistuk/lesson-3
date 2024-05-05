import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countries = [] }) => {
  return (
    <Grid>
      {countries.map(countrie => {
        return (
          <GridItem key={countrie.id}>
            <Link to={`/country/${countrie.id}`}>
              <img src={countrie.flag} alt={countrie.countrie} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

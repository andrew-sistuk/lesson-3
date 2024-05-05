import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import {getCountries} from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function callData() {
      try {
        const data = await getCountries();
        setCountries(data);
      }
      catch(error) {
        console.log(error);
      }
    }
    callData()
  }, [])

  return (
    <Section>
      <Container>
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};

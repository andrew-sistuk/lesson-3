import {
  Container,
  Heading,
  SearchForm,
  Section,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/countryApi';

export const SearchCountry = () => {
  const [nameRagion, setRegion] = useState('');
  const [countries, setCountries] = useState([]);

  const handleSubmit = region => {
    setRegion(region);
  };
  useEffect(() => {
    if (!nameRagion) return;
    const getData = async () => {
      try {
        const data = await fetchByRegion(nameRagion);
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [nameRagion]);
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

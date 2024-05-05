import { Container, CountryInfo, Heading, Section } from 'components';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const { countryId } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};

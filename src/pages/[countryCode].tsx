import { useRouter } from 'next/router';
import CountryDetail from '../components/CountryDetail';
import { Country } from '../utils/types';

const CountryPage = () => {
  const router = useRouter();
  const {
    name,
    officialName,
    capital,
    population,
    region,
    subregion,
    flag,
    languages,
    currencies,
    timezones,
    googleMaps,
    openStreetMaps,
  } = router.query;

  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  const country: Partial<Country> = {
    name: {
      common: name as string,
      official: officialName as string,
    },
    capital: [capital as string],
    population: Number(population),
    region: region as string,
    subregion: subregion as string,
    flags: {
      png: flag as string,
      svg: '', 
    },
    languages: languages ? JSON.parse(languages as string) : {},
    currencies: currencies ? JSON.parse(currencies as string) : {},
    timezones: (timezones as string).split(', '),
    maps: {
      googleMaps: googleMaps as string,
      openStreetMaps: openStreetMaps as string,
    },
  };

  return <CountryDetail country={country as Country} />;
};

export default CountryPage;
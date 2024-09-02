import { Country } from '../utils/types';

const filterCountriesByRegion = (countries: Country[], region: string): Country[] => {
  if (region === 'All') {
    return countries;
  }

  return countries.filter((country) => country.region === region);
};

export default filterCountriesByRegion;
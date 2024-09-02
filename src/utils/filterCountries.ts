import { Country } from './types';

export const filterCountriesByRegion = (
  countries: Country[],
  region: string
): Country[] => {
  return countries.filter((country) => country.region === region);
};
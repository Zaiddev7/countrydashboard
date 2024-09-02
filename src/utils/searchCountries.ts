import { Country } from './types';

export const searchCountries = (
  countries: Country[],
  searchTerm: string
): Country[] => {
  const lowerCaseTerm = searchTerm.toLowerCase();
  return countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(lowerCaseTerm) ||
      (country.capital && country.capital.some(cap => cap.toLowerCase().includes(lowerCaseTerm)))
  );
};
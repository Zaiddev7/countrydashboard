// import { sortCountriesByPopulation } from '../utils/sortCountries';
// import { Country } from '../utils/types';

// const countries: Country[] = [
//   {
//     name: { common: 'France', official: 'French Republic' },
//     capital: ['Paris'],
//     population: 67000000,
//     region: 'Europe',
//     subregion: 'Western Europe',
//     flags: { png: 'france.png', svg: 'france.svg' },
//     languages: { fra: 'French' },
//     currencies: { EUR: { name: 'Euro', symbol: '€' } },
//     timezones: ['CET'],
//     maps: { googleMaps: 'https://maps.google.com', openStreetMaps: 'https://www.openstreetmap.org' },
//     cca3: 'FRA',
//     cca2: 'FR',
//     ccn3: '250',
//     unMember: true,
//     latlng: [46.603354, 1.888334],
//     borders: ['BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'AND', 'CHE'],
//     area: 551695
//   },
//   {
//     name: { common: 'Germany', official: 'Federal Republic of Germany' },
//     capital: ['Berlin'],
//     population: 83000000,
//     region: 'Europe',
//     subregion: 'Western Europe',
//     flags: { png: 'germany.png', svg: 'germany.svg' },
//     languages: { deu: 'German' },
//     currencies: { EUR: { name: 'Euro', symbol: '€' } },
//     timezones: ['CET'],
//     maps: { googleMaps: 'https://maps.google.com', openStreetMaps: 'https://www.openstreetmap.org' },
//     cca3: 'DEU',
//     cca2: 'DE',
//     ccn3: '276',
//     unMember: true,
//     latlng: [51.165691, 10.451526],
//     borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
//     area: 357022
//   },
//   {
//     name: { common: 'Italy', official: 'Italian Republic' },
//     capital: ['Rome'],
//     population: 60000000,
//     region: 'Europe',
//     subregion: 'Southern Europe',
//     flags: { png: 'italy.png', svg: 'italy.svg' },
//     languages: { ita: 'Italian' },
//     currencies: { EUR: { name: 'Euro', symbol: '€' } },
//     timezones: ['CET'],
//     maps: { googleMaps: 'https://maps.google.com', openStreetMaps: 'https://www.openstreetmap.org' },
//     cca3: 'ITA',
//     cca2: 'IT',
//     ccn3: '380',
//     unMember: true,
//     latlng: [41.87194, 12.56738],
//     borders: ['AUT', 'FRA', 'SVK', 'SLO', 'CHE', 'VCT'],
//     area: 301340
//   }
// ];

// describe('sortCountriesByPopulation', () => {
//   test('sorts countries by population in ascending order', () => {
//     const sortedCountries = sortCountriesByPopulation(countries, true);
//     expect(sortedCountries[0].name.common).toBe('Italy'); // Smallest population
//     expect(sortedCountries[1].name.common).toBe('France');
//     expect(sortedCountries[2].name.common).toBe('Germany'); // Largest population
//   });

//   test('sorts countries by population in descending order', () => {
//     const sortedCountries = sortCountriesByPopulation(countries, false);
//     expect(sortedCountries[0].name.common).toBe('Germany'); // Largest population
//     expect(sortedCountries[1].name.common).toBe('France');
//     expect(sortedCountries[2].name.common).toBe('Italy'); // Smallest population
//   });

//   test('returns the same list if the list is empty', () => {
//     const emptyList: Country[] = [];
//     expect(sortCountriesByPopulation(emptyList, true)).toEqual([]);
//   });

//   test('returns the same list if there is only one country', () => {
//     const singleCountry: Country[] = [
//       {
//         name: { common: 'France', official: 'French Republic' },
//         capital: ['Paris'],
//         population: 67000000,
//         region: 'Europe',
//         subregion: 'Western Europe',
//         flags: { png: 'france.png', svg: 'france.svg' },
//         languages: { fra: 'French' },
//         currencies: { EUR: { name: 'Euro', symbol: '€' } },
//         timezones: ['CET'],
//         maps: { googleMaps: 'https://maps.google.com', openStreetMaps: 'https://www.openstreetmap.org' },
//         cca3: 'FRA',
//         cca2: 'FR',
//         ccn3: '250',
//         unMember: true,
//         latlng: [46.603354, 1.888334],
//         borders: ['BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'AND', 'CHE'],
//         area: 551695
//       }
//     ];
//     expect(sortCountriesByPopulation(singleCountry, true)).toEqual(singleCountry);
//   });
// });
import { Country } from 'models';
import { CountrySelector } from './CountrySelector';

const countries: Array<Country> = [
  { id: 1, name: 'Portugal', regionCode: 'PT' },
  { id: 2, name: 'Brazil', regionCode: 'BR' }
]

export const Length = () => <CountrySelector countries={countries} />;

export default {
  title: 'Components/CountrySelector',
  components: CountrySelector
};
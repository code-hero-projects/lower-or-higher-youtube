import { useState } from 'react';
import { AsyncOperationState, Country } from '../../models';
import { CountrySelector } from './CountrySelector';

const countries: Country[] = [
  { id: 1, name: 'United States', regionCode: 'US' },
  { id: 2, name: 'France', regionCode: 'FR' },
  { id: 3, name: 'United Kingdom', regionCode: 'GR' }
];

function CountrySelectorWithState() {
  const [selectedCountry, setSelectedCountry] = useState<number>(1);

  return <CountrySelector countries={countries} selectedCountry={selectedCountry} onCountrySelect={id => setSelectedCountry(id)} operationState={AsyncOperationState.Success} />;
}

export const DisplayCountries = () => <CountrySelector countries={countries} selectedCountry={1} onCountrySelect={id => console.log(id)} operationState={AsyncOperationState.Success} />;

export const SelectCountries = () => <CountrySelectorWithState />;

export default {
  title: 'Components/CountrySelector',
  components: CountrySelector
};
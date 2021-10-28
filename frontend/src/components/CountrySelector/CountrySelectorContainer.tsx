import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, selectCountry, selectCountryState } from "../../redux";
import { CountrySelector } from "./CountrySelector";

export function CountrySelectorContainer() {
  const { countries, selectedCountry, operationState } = useSelector(selectCountryState);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return <CountrySelector 
    countries={countries} 
    selectedCountry={selectedCountry} 
    onCountrySelect={(id: number) => dispatch(selectCountry(id))}
    operationState={operationState}
  />;
}
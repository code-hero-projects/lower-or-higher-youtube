import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountrySelector } from "../../components";
import { getCountries, selectCountry, selectCountryState } from "../../redux";

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
import { getCountries, RootState, selectCountry } from "app-redux";
import { CountrySelector } from "components/CountrySelector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function CountrySelectorContainer() {
  const { countries, selectedCountry, operationState } = useSelector((state: RootState) => state.country);
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
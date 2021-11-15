import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, resetFetchVideosOperationState, selectCountry, selectCountryState } from "../../redux";
import { CountrySelector } from "./CountrySelector";

export function CountrySelectorContainer() {
  const { countries, selectedCountry, fetchCountriesOperationState } = useSelector(selectCountryState);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const onSelectCountry = (countryId: number) => {
    dispatch(resetFetchVideosOperationState());
    dispatch(selectCountry(countryId));
  };

  return <CountrySelector 
    countries={countries} 
    selectedCountry={selectedCountry} 
    onCountrySelect={onSelectCountry}
    operationState={fetchCountriesOperationState}
  />;
}
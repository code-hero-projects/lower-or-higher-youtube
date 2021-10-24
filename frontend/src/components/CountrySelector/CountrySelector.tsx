import { MenuItem, Select, SelectChangeEvent } from "@material-ui/core";
import { AsyncOperationState, Country } from "../../models";
import { FormControlStyled } from "./CountrySelectorStyles";

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: number;
  onCountrySelect: (countryId: number) => void;
  operationState: AsyncOperationState;
}

export function CountrySelector({ countries, selectedCountry, onCountrySelect, operationState }: CountrySelectorProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onCountrySelect(+event.target.value);
  };
  
  return (
    <FormControlStyled variant="outlined">
      <Select
        value={selectedCountry!.toString()}
        onChange={handleChange}
      >
        {countries.map((country: Country) => <MenuItem value={country.id.toString()} key={country.id}>{country.name}</MenuItem>)}
      </Select>
    </FormControlStyled>
  );
}

import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { AsyncOperationState, Country } from "../../models";

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
    <FormControl variant="outlined" sx={{width: '50%'}}>
      <Select
        value={selectedCountry!.toString()}
        onChange={handleChange}
      >
        {countries.map((country: Country) => <MenuItem value={country.id.toString()} key={country.id}>{country.name}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

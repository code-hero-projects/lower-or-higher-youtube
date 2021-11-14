import { MenuItem, Select, SelectChangeEvent } from "@material-ui/core";
import { AsyncOperationState, Country } from "../../models";
import { Loading } from '../Loading';
import { SpacedTypographyWrapper } from '../Styled';
import { CountrySelectorWrapper, FormControlWrapper } from "./CountrySelectorStyles";

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
    <CountrySelectorWrapper>
      {operationState === AsyncOperationState.Loading && <Loading message="Loading countries..." />}
      {operationState !== AsyncOperationState.Loading &&
        <>
          <SpacedTypographyWrapper variant="h3" align="center">Select a country to start the game</SpacedTypographyWrapper>
          <FormControlWrapper variant="outlined">
            <Select
              value={selectedCountry!.toString()}
              onChange={handleChange}
            >
              {countries.map((country: Country) => <MenuItem value={country.id.toString()} key={country.id}>{country.name}</MenuItem>)}
            </Select>
          </FormControlWrapper>
        </>
      }
    </CountrySelectorWrapper>
  );
}

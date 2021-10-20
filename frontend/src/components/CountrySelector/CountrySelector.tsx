import { createStyles, FormControl, MenuItem, Select, withStyles, WithStyles } from "@material-ui/core";
import { AsyncOperationState, Country } from 'models';

const styles = () => createStyles({
  root: {
    width: '100%'
  }
});

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: number;
  onCountrySelect: (countryId: number) => void;
  operationState: AsyncOperationState;
}

type CountrySelectorPropsStyles = CountrySelectorProps & WithStyles<typeof styles>;

function CountrySelectorComponent({ countries, selectedCountry, onCountrySelect, classes }: CountrySelectorPropsStyles) {
  const { root } = classes;
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onCountrySelect(event.target.value as number);
  };
  
  return (
    <FormControl variant="outlined" className={root}>
      <Select
        value={selectedCountry}
        onChange={handleChange}
      >
        {countries.map((country: Country) => <MenuItem value={country.id} key={country.id}>{country.name}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export const CountrySelector = withStyles(styles)(CountrySelectorComponent);

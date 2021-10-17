import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import { Country } from 'models';

const styles = () => createStyles({});

interface CountrySelectorProps {
  countries: Array<Country>;
}

type CountrySelectorPropsStyles = CountrySelectorProps & WithStyles<typeof styles>;

function CountrySelectorComponent({ countries, classes }: CountrySelectorPropsStyles) {
  return <div>Countries length: {countries.length}</div>;
}

export const CountrySelector = withStyles(styles)(CountrySelectorComponent);

import { Button } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

interface EndGameCountrySelectorProps {
  onChooseAnotherCountry: () => void;
}

export function EndGameCountrySelector({ onChooseAnotherCountry }: EndGameCountrySelectorProps) {
  return <Button variant="contained" size="large" onClick={onChooseAnotherCountry} endIcon={<PlayArrow />} color="success">Choose another country</Button>;
}
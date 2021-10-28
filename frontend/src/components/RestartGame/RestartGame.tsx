import { Button } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

interface RestartGameProps {
  onRestartGame: () => void;
}

export function RestartGame({ onRestartGame }: RestartGameProps) {
  return <Button variant="contained" size="large" onClick={onRestartGame} endIcon={<Refresh />}>Restart game with same country</Button>;
}
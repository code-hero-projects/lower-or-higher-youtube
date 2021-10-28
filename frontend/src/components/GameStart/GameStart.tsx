import { Button } from "@material-ui/core";

interface GameStartProps {
  onStartGame: () => void;
}

export function GameStart({onStartGame}: GameStartProps) {
  return <Button sx={{width: '30%'}} variant="contained" size="large" color="success" onClick={onStartGame}>Start Game</Button>;
}
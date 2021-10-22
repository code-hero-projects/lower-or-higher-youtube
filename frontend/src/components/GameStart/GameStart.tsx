import { Button } from "@mui/material";

interface GameStartProps {
  onStartGame: () => void;
}

export function GameStart({onStartGame}: GameStartProps) {
  return <Button variant="contained" size="large" color="success" onClick={onStartGame}>Start Game</Button>;
}
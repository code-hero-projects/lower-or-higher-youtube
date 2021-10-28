import { GameStartButtonWrapper } from "./GameStartStyled";

interface GameStartProps {
  onStartGame: () => void;
}

export function GameStart({onStartGame}: GameStartProps) {
  return <GameStartButtonWrapper variant="contained" size="large" color="success" onClick={onStartGame}>Start Game</GameStartButtonWrapper>;
}
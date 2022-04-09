import { RightCornerSubtitle } from "../../Styled";

interface HighScoreScoreProps {
  highScore: number;
}

export function HighScore({ highScore }: HighScoreScoreProps) {
  return (
    <RightCornerSubtitle variant="h4">High score: {highScore}</RightCornerSubtitle>
  );
}
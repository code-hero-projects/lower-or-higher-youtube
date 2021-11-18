import { CornerSubtitle } from "../../Styled";

interface ScoreProps {
  currentScore: number;
}

export function Score({ currentScore }: ScoreProps) {
  return (
    <CornerSubtitle variant="h4">Current score: {currentScore}</CornerSubtitle>
  );
}
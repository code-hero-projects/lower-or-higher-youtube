import { LeftCornerSubtitle } from "../../Styled";

interface ScoreProps {
  currentScore: number;
}

export function Score({ currentScore }: ScoreProps) {
  return (
    <LeftCornerSubtitle variant="h4">Current score: {currentScore}</LeftCornerSubtitle>
  );
}
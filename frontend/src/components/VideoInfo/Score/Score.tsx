import { TypographyWrapper } from "../../Styled";

interface ScoreProps {
  currentScore: number;
}

export function Score({ currentScore }: ScoreProps) {
  return (
    <TypographyWrapper variant="h4">Current score: {currentScore}</TypographyWrapper>
  );
}
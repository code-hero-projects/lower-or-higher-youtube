import { Typography } from "@material-ui/core";

interface ScoreProps {
  currentScore: number;
}

export function Score({ currentScore }: ScoreProps) {
  return (
    <Typography variant="h4" color="common.white">Current score: {currentScore}</Typography>
  );
}
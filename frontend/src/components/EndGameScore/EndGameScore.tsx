import { Box, Typography } from "@material-ui/core";

interface EndGameScoreProps {
  score: number;
}

export function EndGameScore({ score }: EndGameScoreProps) {
  return (
    <Box textAlign="center">
      <Typography variant="h4" >Game Over!</Typography>
      <Typography variant="h4" >Final score: {score}</Typography>
    </Box>
  );
}
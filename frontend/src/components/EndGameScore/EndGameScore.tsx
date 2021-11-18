import { Box } from "@material-ui/core";
import { Title } from "../Styled";

interface EndGameScoreProps {
  score: number;
}

export function EndGameScore({ score }: EndGameScoreProps) {
  return (
    <Box>
      <Title variant="h4" align="center">Game Over!</Title>
      <Title variant="h4" align="center">Final score: {score}</Title>
    </Box>
  );
}
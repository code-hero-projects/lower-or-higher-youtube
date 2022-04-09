import { Box } from "@material-ui/core";
import { Title } from "../Styled";

interface EndGameScoreProps {
  score: number;
  hasNewHighScore: boolean;
}

export function EndGameScore({ score, hasNewHighScore }: EndGameScoreProps) {
  return (
    <Box>
      <Title variant="h4" align="center">Game Over!</Title>
      <Title variant="h4" align="center">Final score: {score}</Title>
      {hasNewHighScore && <Title variant="h4" align="center">Congratulations, you got a new high score!</Title>}
    </Box>
  );
}
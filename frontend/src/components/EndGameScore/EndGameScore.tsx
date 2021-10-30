import { Box } from "@material-ui/core";
import { TypographyWrapper } from "../Styled";

interface EndGameScoreProps {
  score: number;
}

export function EndGameScore({ score }: EndGameScoreProps) {
  return (
    <Box>
      <TypographyWrapper variant="h4" align="center">Game Over!</TypographyWrapper>
      <TypographyWrapper variant="h4" align="center">Final score: {score}</TypographyWrapper>
    </Box>
  );
}
import { Box } from "@material-ui/core";
import { VideoGuessContainer, VideoInfoContainer } from "../../containers";

export function InGamePage() {
  const questionScore: number = +process.env.REACT_APP_QUESTION_SCORE!;
  const timeBonusScore: number = +process.env.REACT_APP_TIME_SECOND_BONUS_SCORE!;

  return (
    <Box sx={{display: 'flex', height: '100vh', overflow: 'hidden', flexDirection: 'column'}}>
      <Box sx={{flex: 1}}>
        <VideoInfoContainer />
      </Box>
      <Box sx={{flex: 1}}>
        <VideoGuessContainer questionScore={questionScore} timeBonusScore={timeBonusScore} />
      </Box>
    </Box>
  );
}
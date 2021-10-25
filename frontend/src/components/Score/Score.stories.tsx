import { Box } from "@material-ui/core";
import { Score } from "./Score";

export const DisplayInitialScore = () => <Box sx={{backgroundColor: 'black'}}><Score currentScore={0} /></Box>;

export const DisplayMiddleGameScore = () => <Box sx={{backgroundColor: 'black'}}><Score currentScore={1548} /></Box>;

export default {
  title: 'Components/Score',
  components: Score
};
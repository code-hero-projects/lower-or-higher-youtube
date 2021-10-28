import { Box } from "@material-ui/core";
import { Timer } from "./Timer";

export const DisplayTime = () => <Box sx={{backgroundColor: 'black'}}><Timer time={15} onUpdateTime={() => {}} /></Box>;

export const OnUpdateTime = () => <Box sx={{backgroundColor: 'black'}}><Timer time={5} onUpdateTime={(currentTime) => console.log(currentTime)} /></Box>;

export default {
  title: 'Components/Timer',
  components: Timer
};
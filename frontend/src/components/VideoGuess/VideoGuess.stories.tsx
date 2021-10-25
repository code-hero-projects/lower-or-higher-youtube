import { Box } from "@material-ui/core";
import { Video } from "../../models";
import { VideoGuess } from "./VideoGuess";

const video: Video = {
  id: 5,
  name: 'Adele - Easy On Me (Official Video)',
  channel: 'AdeleVEVO',
  views: 100689539,
  thumbnail: 'https://i.ytimg.com/vi/U3ASj1L6_sY/maxresdefault.jpg'
};

export const Display = () => <Box sx={{height: '100vh'}}><VideoGuess video={video} onHigherOption={() => {}} onLowerOption={() => {}} /></Box>;

export const OnOptionsClick = () => <Box sx={{height: '100vh'}}><VideoGuess video={video} onHigherOption={() => alert('higher')} onLowerOption={() => alert('lower')} /></Box>;

export default {
  title: 'Components/VideoGuess',
  components: VideoGuess
};
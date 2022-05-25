import { Box } from "@material-ui/core";
import { Video } from "../../models";
import { VideoInfo } from "./VideoInfo";

const video: Video = {
  id: 5,
  name: 'Adele - Easy On Me (Official Video)',
  channel: 'AdeleVEVO',
  views: 100689539,
  thumbnail: 'https://i.ytimg.com/vi/U3ASj1L6_sY/maxresdefault.jpg',
  countryId: 5
};

export const WithViews = () => <Box sx={{height: '100vh'}}><VideoInfo video={video} currentScore={573} highScore={500} /></Box>;

export default {
  title: 'Components/VideoInfo',
  components: VideoInfo
};
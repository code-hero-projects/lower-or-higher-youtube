import { Video } from "../../models";
import { VideoPanel } from "./VideoPanel";

const video: Video = {
  id: 5,
  name: 'Adele - Easy On Me (Official Video)',
  channel: 'AdeleVEVO',
  views: 100689539,
  thumbnail: 'https://i.ytimg.com/vi/U3ASj1L6_sY/maxresdefault.jpg'
};

export const WithViews = () => <VideoPanel video={video} showViews/>;

export const WithoutViews = () => <VideoPanel video={video}/>;

export default {
  title: 'Components/VideoPanel',
  components: VideoPanel
};
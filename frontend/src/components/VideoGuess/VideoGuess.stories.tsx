import { Video } from "../../models";
import { VideoGuess } from "./VideoGuess";

const video: Video = {
  id: 5,
  name: 'Adele - Easy On Me (Official Video)',
  channel: 'AdeleVEVO',
  views: 100689539,
  thumbnail: 'https://i.ytimg.com/vi/U3ASj1L6_sY/maxresdefault.jpg'
};

export const Display = () => <VideoGuess video={video} onHigherOption={() => {}} onLowerOption={() => {}} />;

export const OnOptionsClick = () => <VideoGuess video={video} onHigherOption={() => alert('higher')} onLowerOption={() => alert('lower')} />;

export default {
  title: 'Components/VideoGuess',
  components: VideoGuess
};
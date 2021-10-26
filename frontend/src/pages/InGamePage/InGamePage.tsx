import { Box } from "@material-ui/core";
import { VideoGuess, VideoInfo } from "../../components";
import { Video } from "../../models";

export function InGamePage() {
  const currentVideo: Video = {
    id: 5,
    name: 'Adele - Easy On Me (Official Video)',
    channel: 'AdeleVEVO',
    views: 100689539,
    thumbnail: 'https://i.ytimg.com/vi/U3ASj1L6_sY/maxresdefault.jpg'
  };

  const nextVideo: Video = {
    id: 5,
    name: 'Last To Take Hand Off Lamborghini, Keeps It',
    channel: 'Mr. Beast',
    views: 100689539,
    thumbnail: 'https://i.ytimg.com/vi/qIsgdOVGA04/maxresdefault.jpg'
  };

  const onOptionClick = () => {};

  return (
    <Box sx={{display: 'flex', width: '100%', height: '100vh'}}>
      <Box sx={{flex: 1}}>
        <VideoInfo video={currentVideo} currentScore={1584} />
      </Box>
      <Box sx={{flex: 1}}>
        <VideoGuess videoToGuess={nextVideo} videoGuessed={currentVideo} onHigherOption={onOptionClick} onLowerOption={onOptionClick} initialTime={45} onUpdateTimer={currentTime => console.log(currentTime)} />
      </Box>
    </Box>
  );
}
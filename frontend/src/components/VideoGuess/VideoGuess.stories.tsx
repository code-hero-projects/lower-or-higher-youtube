import { Box } from "@material-ui/core";
import { Video } from "../../models";
import { VideoGuess } from "./VideoGuess";

const videoToGuess: Video = {
  id: 5,
  name: 'Adele - Easy On Me (Official Video)',
  channel: 'AdeleVEVO',
  views: 100689539,
  thumbnail: 'https://i.ytimg.com/vi/U3ASj1L6_sY/maxresdefault.jpg',
  countryId: 5
};

const videoGuessed: Video = {
  id: 5,
  name: 'Some video name',
  channel: 'AdeleVEVO',
  views: 100689539,
  thumbnail: 'https://i.ytimg.com/vi/U3ASj1L6_sY/maxresdefault.jpg',
  countryId: 5
};

export const DisplayWithoutViews = () => <Box sx={{height: '100vh'}}><VideoGuess videoToGuess={videoToGuess} videoGuessed={videoGuessed} showViews={false} onHigherOption={() => {}} onLowerOption={() => {}} useTimer={true} time={5} stopTime={true} onUpdateTimer={() => {}} /></Box>;

export const DisplayWithViews = () => <Box sx={{height: '100vh'}}><VideoGuess videoToGuess={videoToGuess} videoGuessed={videoGuessed} showViews={true} onHigherOption={() => {}} onLowerOption={() => {}} useTimer={false} time={5} stopTime={true} onUpdateTimer={() => {}} /></Box>;

export const OnOptionsClick = () => <Box sx={{height: '100vh'}}><VideoGuess videoToGuess={videoToGuess} videoGuessed={videoGuessed}  showViews={false} onHigherOption={() => alert('higher')} onLowerOption={() => alert('lower')} useTimer={true} time={5} stopTime={true} onUpdateTimer={(currentTime) => console.log(currentTime)} /></Box>;

export default {
  title: 'Components/VideoGuess',
  components: VideoGuess
};
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { BackFromLeaderboard } from "./BackFromLeaderboard";

export const DisplayBackFromLeaderboardStartGame = () => <BackFromLeaderboard onBackFromLeaderboard={() => {}} gamePage="Start Game" endIcon={<ArrowForward />} />;

export const DisplayBackFromLeaderboardEndGame = () => <BackFromLeaderboard onBackFromLeaderboard={() => {}} gamePage="End Game" endIcon={<ArrowBack />}/>;

export const OnClick = () => <BackFromLeaderboard onBackFromLeaderboard={() => {alert('clicked')}} gamePage="Start Game" endIcon={<ArrowForward />} />;

export default {
  title: 'Components/BackFromLeaderboard',
  components: BackFromLeaderboard
};
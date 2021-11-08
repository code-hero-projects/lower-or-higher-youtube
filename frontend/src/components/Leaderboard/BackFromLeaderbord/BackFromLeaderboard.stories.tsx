import { BackFromLeaderboard } from "./BackFromLeaderboard";

export const DisplayBackFromLeaderboardStartGame = () => <BackFromLeaderboard onBackFromLeaderboard={() => {}} gamePage="Start Game" />;

export const DisplayBackFromLeaderboardEndGame = () => <BackFromLeaderboard onBackFromLeaderboard={() => {}} gamePage="End Game" />;

export const OnClick = () => <BackFromLeaderboard onBackFromLeaderboard={() => {alert('clicked')}} gamePage="Start Game" />;

export default {
  title: 'Components/BackFromLeaderboard',
  components: BackFromLeaderboard
};
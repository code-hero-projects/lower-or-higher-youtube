import { ShowLeaderboard } from "./ShowLeaderboard";

export const DisplayShowLeaderboard = () => <ShowLeaderboard onShowLeaderboard={() => {}}/>;

export const OnClick = () => <ShowLeaderboard onShowLeaderboard={() => {alert('clicked')}}/>;

export default {
  title: 'Components/ShowLeaderboard',
  components: ShowLeaderboard
};
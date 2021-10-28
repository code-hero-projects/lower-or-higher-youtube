import { RestartGame } from "./RestartGame";

export const DisplayRestartGame = () => <RestartGame onRestartGame={() => {}}/>;

export const OnClick = () => <RestartGame onRestartGame={() => {alert('clicked')}}/>;

export default {
  title: 'Components/RestartGame',
  components: RestartGame
};
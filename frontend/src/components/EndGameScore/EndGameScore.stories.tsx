import { EndGameScore } from "./EndGameScore";

export const DisplayEndGameScore = () => <EndGameScore score={1520} hasNewHighScore={false} />;
export const DisplayEndGameScoreWithHighScore = () => <EndGameScore score={1520} hasNewHighScore />;

export default {
  title: 'Components/EndGameScore',
  components: EndGameScore
};
import { useSelector } from "react-redux";
import { selectScoreState } from "../../redux";
import { EndGameScore } from "./EndGameScore";

export function EndGameScoreContainer() {
  const { score, hasNewHighScore } = useSelector(selectScoreState);

  return <EndGameScore score={score} hasNewHighScore={hasNewHighScore} />;
}
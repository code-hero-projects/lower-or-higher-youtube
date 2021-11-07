import { useSelector } from "react-redux";
import { selectScoreState } from "../../redux";
import { EndGameScore } from "./EndGameScore";

export function EndGameScoreContainer() {
  const { score } = useSelector(selectScoreState);

  return <EndGameScore score={score} />;
}
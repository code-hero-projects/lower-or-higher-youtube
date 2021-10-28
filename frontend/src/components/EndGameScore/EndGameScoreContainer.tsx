import { useSelector } from "react-redux";
import { selectGameState } from "../../redux";
import { EndGameScore } from "./EndGameScore";

export function EndGameScoreContainer() {
  const { score } = useSelector(selectGameState);

  return <EndGameScore score={score} />;
}
import { useSelector } from "react-redux";
import { EndGameScore } from "../../components";
import { selectGameState } from "../../redux";

export function EndGameScoreContainer() {
  const { score } = useSelector(selectGameState);

  return <EndGameScore score={score} />;
}
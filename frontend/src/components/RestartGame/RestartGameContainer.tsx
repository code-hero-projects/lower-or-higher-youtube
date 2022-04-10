import { useDispatch } from "react-redux";
import { nextQuestion, resetScore, shuffleVideos, startGame } from "../../redux";
import { RestartGame } from "./RestartGame";

export function RestartGameContainer() {
  const dispatch = useDispatch();

  const onRestartGame = () => {
    dispatch(nextQuestion());
    dispatch(resetScore());
    dispatch(shuffleVideos());
    dispatch(startGame());
  };

  return <RestartGame onRestartGame={onRestartGame} />;
}
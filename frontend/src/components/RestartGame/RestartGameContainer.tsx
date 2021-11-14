import { useDispatch } from "react-redux";
import { resetScore, shuffleVideos, startGame } from "../../redux";
import { RestartGame } from "./RestartGame";

export function RestartGameContainer() {
  const dispatch = useDispatch();

  const onRestartGame = () => {
    dispatch(resetScore());
    dispatch(shuffleVideos());
    dispatch(startGame());
  };

  return (
    <RestartGame onRestartGame={onRestartGame} />
  );
}
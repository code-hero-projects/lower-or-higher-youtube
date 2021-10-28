import { useDispatch } from "react-redux";
import { RestartGame } from "../../components";
import { shuffleVideos, startGame } from "../../redux";

export function RestartGameContainer() {
  const dispatch = useDispatch();

  const onRestartGame = () => {
    dispatch(shuffleVideos());
    dispatch(startGame());
  };

  return (
    <RestartGame onRestartGame={onRestartGame} />
  );
}
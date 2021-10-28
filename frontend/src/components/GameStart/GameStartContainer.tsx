import { useDispatch, useSelector } from "react-redux";
import { getVideos, selectCountryState, startGame } from "../../redux";
import { GameStart } from "./GameStart";

export function GameStartContainer() {
  const { selectedCountry } = useSelector(selectCountryState);
  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(getVideos(selectedCountry));
    dispatch(startGame());
  };

  return <GameStart onStartGame={onStartGame} />;
}
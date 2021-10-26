import { useDispatch, useSelector } from "react-redux";
import { GameStart } from "../../components";
import { getVideos, selectCountryState, startGame } from "../../redux";

export function GameStartContainer() {
  const { selectedCountry } = useSelector(selectCountryState);
  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(getVideos(selectedCountry));
    dispatch(startGame());
  };

  return <GameStart onStartGame={onStartGame} />;
}
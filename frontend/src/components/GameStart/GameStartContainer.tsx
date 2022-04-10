import { useDispatch, useSelector } from "react-redux";
import { getVideos, nextQuestion, resetFetchVideosOperationState, selectCountryState, selectVideoState, shuffleVideos, startGame } from "../../redux";
import { GameStart } from "./GameStart";

export function GameStartContainer() {
  const { selectedCountry, fetchCountriesOperationState } = useSelector(selectCountryState);
  const { fetchVideosOperationState } = useSelector(selectVideoState);

  const dispatch = useDispatch();

  const onLoadVideos = () => dispatch(getVideos(selectedCountry));

  const onStartGame = () => {
    dispatch(nextQuestion());
    dispatch(shuffleVideos());
    dispatch(startGame());
    dispatch(resetFetchVideosOperationState());
  };

  return (
    <GameStart
      fetchCountriesOperationState={fetchCountriesOperationState}
      fetchVideosOperationState={fetchVideosOperationState}
      onLoadVideos={onLoadVideos}
      onStartGame={onStartGame} 
    />
  );
}
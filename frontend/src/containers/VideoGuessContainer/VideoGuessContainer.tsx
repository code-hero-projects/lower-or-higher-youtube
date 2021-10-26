import { useDispatch, useSelector } from "react-redux";
import { VideoGuess } from "../../components";
import { AsyncOperationState } from "../../models";
import { endGame, nextVideo, selectGameState, selectVideoState } from "../../redux";

export function VideoGuessContainer() {
  const { videoGuessed, videoToGuess, operationState } = useSelector(selectVideoState);
  const { initialTime } = useSelector(selectGameState);
  const dispatch = useDispatch();

  if (operationState != AsyncOperationState.Success) {
    return <h1>Loading Videos</h1>;
  }

  const onHigherOption = () => lowerOrHigherOption(() => videoToGuess.views >= videoGuessed.views);

  const onLowerOption = () => lowerOrHigherOption(() => videoToGuess.views < videoGuessed.views);

  const onUpdateTimer = (currentTime: number) => {};

  const lowerOrHigherOption = (predicate: () => boolean) => {
    if (predicate()){
      dispatch(nextVideo());
    } else {
      dispatch(endGame());
    }
  }

  return (
    <VideoGuess
      videoGuessed={videoGuessed}
      videoToGuess={videoToGuess}
      initialTime={initialTime}
      onHigherOption={onHigherOption}
      onLowerOption={onLowerOption}
      onUpdateTimer={onUpdateTimer}
    />
  );
}
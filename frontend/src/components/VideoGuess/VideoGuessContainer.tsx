import { useDispatch, useSelector } from "react-redux";
import { AsyncOperationState } from "../../models";
import { addScore, endGame, nextVideo, resetTime, selectGameState, selectVideoState, updateTime } from "../../redux";
import { VideoGuess } from "./VideoGuess";

interface VideoGuessContainerProps {
  questionScore: number;
  timeBonusScore: number;
}

export function VideoGuessContainer({ questionScore, timeBonusScore }: VideoGuessContainerProps) {
  const { videoGuessed, videoToGuess, operationState } = useSelector(selectVideoState);
  const { time } = useSelector(selectGameState);
  const dispatch = useDispatch();

  if (operationState !== AsyncOperationState.Success) {
    return <h1>Loading Videos</h1>;
  }

  const onHigherOption = () => lowerOrHigherOption(() => videoToGuess.views >= videoGuessed.views);

  const onLowerOption = () => lowerOrHigherOption(() => videoToGuess.views < videoGuessed.views);

  const onUpdateTimer = (currentTime: number) => dispatch(updateTime(currentTime));

  const lowerOrHigherOption = (predicate: () => boolean) => {
    if (predicate()){
      const scoreToAdd = questionScore + (time * timeBonusScore);
      dispatch(addScore(scoreToAdd));
      dispatch(nextVideo());
      dispatch(resetTime());
    } else {
      dispatch(endGame());
    }
  }

  return (
    <VideoGuess
      videoGuessed={videoGuessed}
      videoToGuess={videoToGuess}
      time={time}
      onHigherOption={onHigherOption}
      onLowerOption={onLowerOption}
      onUpdateTimer={onUpdateTimer}
    />
  );
}
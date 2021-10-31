import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Answer, AsyncOperationState } from "../../models";
import { addScore, endGame, nextQuestion, nextVideo, selectQuestionState, selectVideoState, setAnswer, updateTime } from "../../redux";
import { VideoGuess } from "./VideoGuess";

interface VideoGuessContainerProps {
  questionScore: number;
  timeBonusScore: number;
}

export function VideoGuessContainer({ questionScore, timeBonusScore }: VideoGuessContainerProps) {
  const { videoGuessed, videoToGuess, operationState } = useSelector(selectVideoState);
  const { time } = useSelector(selectQuestionState);
  const [ showViews, setShowViews ] = useState<boolean>(false);
  const dispatch = useDispatch();

  if (operationState !== AsyncOperationState.Success) {
    return <h1>Loading Videos</h1>;
  }

  const onHigherOption = () => lowerOrHigherOption(() => videoToGuess.views >= videoGuessed.views);

  const onLowerOption = () => lowerOrHigherOption(() => videoToGuess.views < videoGuessed.views);

  const onUpdateTimer = (currentTime: number) => dispatch(updateTime(currentTime));

  const lowerOrHigherOption = (predicate: () => boolean) => {
    const answer = predicate() ? Answer.Correct : Answer.Incorrect;

    setShowViews(true);
    dispatch(setAnswer(answer));
    
    setTimeout(() => {
      if (predicate()){
        const scoreToAdd = questionScore + (time * timeBonusScore);
        dispatch(addScore(scoreToAdd));
        dispatch(nextVideo());
      } else {
        dispatch(endGame());
      }
      dispatch(nextQuestion());
      setShowViews(false);
    }, 1500);
  }

  return (
    <VideoGuess
      videoGuessed={videoGuessed}
      videoToGuess={videoToGuess}
      time={time}
      onHigherOption={onHigherOption}
      onLowerOption={onLowerOption}
      onUpdateTimer={onUpdateTimer}
      showViews={showViews}
    />
  );
}
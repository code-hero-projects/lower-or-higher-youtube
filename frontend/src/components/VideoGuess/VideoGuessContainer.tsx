import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Answer, Video } from "../../models";
import { updateScore, endGame, nextQuestion, selectQuestionState, setAnswer, stopTime, updateTime, updateHighScore } from "../../redux";
import { VideoGuess } from "./VideoGuess";

interface VideoGuessContainerProps {
  onAnswer: (correct: boolean) => void;
  videoGuessed: Video;
  videoToGuess: Video;
}

export function VideoGuessContainer({ onAnswer, videoGuessed, videoToGuess }: VideoGuessContainerProps) {
  const { time, timeStopped } = useSelector(selectQuestionState);
  const [ showViews, setShowViews ] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onHigherOption = () => lowerOrHigherOption(() => videoToGuess.views >= videoGuessed.views);

  const onLowerOption = () => lowerOrHigherOption(() => videoToGuess.views < videoGuessed.views);

  const onUpdateTimer = (currentTime: number) => dispatch(updateTime(currentTime));

  const lowerOrHigherOption = (predicate: () => boolean) => {
    const answer = predicate() ? Answer.Correct : Answer.Incorrect;

    setShowViews(true);
    dispatch(setAnswer(answer));
    dispatch(stopTime());
    
    setTimeout(() => {
      const correctAnswer = predicate();

      if (correctAnswer){
        dispatch(updateScore(time));
        dispatch(updateHighScore())
      } else {
        dispatch(endGame());
      }
      dispatch(nextQuestion());
      setShowViews(false);
      onAnswer(correctAnswer);
    }, 2500);
  }

  return (
    <VideoGuess
      videoGuessed={videoGuessed}
      videoToGuess={videoToGuess}
      time={time}
      stopTime={timeStopped}
      onHigherOption={onHigherOption}
      onLowerOption={onLowerOption}
      onUpdateTimer={onUpdateTimer}
      showViews={showViews}
    />
  );
}
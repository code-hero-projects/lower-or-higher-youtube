import { VideoGuessContainer, VideoInfoContainer } from "../../containers";
import { BaseWrapper } from "./InGamePageStyled";

export function InGamePage() {
  const questionScore: number = +process.env.REACT_APP_QUESTION_SCORE!;
  const timeBonusScore: number = +process.env.REACT_APP_TIME_SECOND_BONUS_SCORE!;

  return (
    <BaseWrapper>
      <VideoInfoContainer />
      <VideoGuessContainer questionScore={questionScore} timeBonusScore={timeBonusScore} />
    </BaseWrapper>
  );
}
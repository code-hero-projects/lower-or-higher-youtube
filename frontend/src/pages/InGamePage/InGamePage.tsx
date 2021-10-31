import { VideoGuessContainer, VideoInfoContainer } from "../../components";
import { AnswerSignContainer } from "../../components/AnswerSign";
import { AnswerSignWrapper, BaseWrapper } from "./InGamePageStyled";

export function InGamePage() {
  const questionScore: number = +process.env.REACT_APP_QUESTION_SCORE!;
  const timeBonusScore: number = +process.env.REACT_APP_TIME_SECOND_BONUS_SCORE!;

  return (
    <BaseWrapper>
      <VideoInfoContainer />
      <AnswerSignWrapper>
        <AnswerSignContainer />
      </AnswerSignWrapper>
      <VideoGuessContainer questionScore={questionScore} timeBonusScore={timeBonusScore} />
    </BaseWrapper>
  );
}
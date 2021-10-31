import { useSelector } from "react-redux";
import { selectQuestionState } from "../../redux";
import { AnswerSign } from "./AnswerSign";

export function AnswerSignContainer() {
  const { answer } = useSelector(selectQuestionState);

  return <AnswerSign answer={answer} />;
}
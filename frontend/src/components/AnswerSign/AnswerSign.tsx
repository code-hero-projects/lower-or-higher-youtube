import { Box } from "@material-ui/core";
import { Answer } from "../../models";
import { BaseWrapper, CheckWrapper, CloseWrapper, VsWrapper } from "./AnswerSignStyled";

export interface AnswerSignProps {
  answer: Answer;
}

export function AnswerSign({ answer }: AnswerSignProps) {
  const renderAnswer = {
    [Answer.NotSelected]: <VsWrapper>VS</VsWrapper>,
    [Answer.Correct]: <CheckWrapper />,
    [Answer.Incorrect]: <CloseWrapper />
  };
  
  return (
    <Box>
      <BaseWrapper answer={answer}>
        {renderAnswer[answer]}
      </BaseWrapper>
    </Box>
  );
}
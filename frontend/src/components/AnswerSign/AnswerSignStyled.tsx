import { Box, Typography } from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";
import { css, styled } from "@material-ui/system";
import { Answer } from "../../models";
import { fadeInAnimation } from '../Styled';

interface BaseWrapperProps {
  answer: Answer;
}

const backgroundColor =  {
  [Answer.NotSelected]: 'white',
  [Answer.Correct]: 'green',
  [Answer.Incorrect]: 'red'
};

const signCss = css`
  color: white;
  width: 4rem;
  height: 4rem;
  visibility: visible;
`;

export const BaseWrapper = styled(Box)<BaseWrapperProps>`
  border-radius: 50%;
  background-color: ${props => backgroundColor[props.answer]};
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => fadeInAnimation({active: props.answer === Answer.Correct || props.answer === Answer.Incorrect})}
`;

export const VsWrapper = styled(Typography)`
  font-weight: bold;
  font-size: 2rem;
`;

export const CheckWrapper = styled(Check)`
  ${signCss}
`;

export const CloseWrapper = styled(Close)`
  ${signCss}
`;
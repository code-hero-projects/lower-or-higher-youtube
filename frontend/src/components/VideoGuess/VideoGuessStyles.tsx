import { Box } from "@material-ui/core";
import { styled } from "@material-ui/system";
import { fadeInAnimation, fadeOutAnimation } from "../Styled";

interface FadeProps {
  showViews: boolean;
}

export const HigherLowerOptionsWrapper = styled(Box)`
  margin-top: 1%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const HigherOptionWrapper = styled(Box)<FadeProps>`
  margin-right: 10%;
  ${props => fadeOutAnimation({active: props.showViews})}
`;

export const ShowViewsWrapper = styled(Box)<FadeProps>`
  ${props => fadeInAnimation({ active: props.showViews })};
`;

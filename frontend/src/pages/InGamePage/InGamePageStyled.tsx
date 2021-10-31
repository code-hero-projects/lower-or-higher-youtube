import { Box } from "@material-ui/core";
import { styled } from "@material-ui/system";

export const BaseWrapper = styled(Box)`
  display: flex; 
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
`;

export const AnswerSignWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
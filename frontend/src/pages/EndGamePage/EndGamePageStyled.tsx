import { Box } from "@material-ui/core";
import { styled } from "@material-ui/system";
import { BackgroundImageWrapper } from "../../components";

export const BaseWrapper = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EndGamePageBackgroundImageWrapper = styled(BackgroundImageWrapper)`
  filter: brightness(100%);
  opacity: 0.9;
`;

export const OptionsWrapper = styled(Box)`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;
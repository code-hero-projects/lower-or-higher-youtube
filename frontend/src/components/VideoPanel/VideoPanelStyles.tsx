import { Box } from "@material-ui/core";
import { styled } from "@material-ui/system";
import { VideoPanelProps } from "./VideoPanel";

export const BaseWrapper = styled(Box)`
  height: 100%;
  width: 100%;
`;

export const BackgroundImageWrapper = styled(Box)<VideoPanelProps>`
  background-image: url(${({ video }) => video.thumbnail});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const VideoDetailsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
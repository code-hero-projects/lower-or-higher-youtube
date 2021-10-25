import { Box } from "@material-ui/core";
import { styled } from "@material-ui/system";

export interface BackgroundImageWrapperProps {
  thumbnail: string;
}

export const BaseWrapper = styled(Box)`
  height: 100%;
  width: 100%;
`;

export const BackgroundImageWrapper = styled(Box)<BackgroundImageWrapperProps>`
  background-image: url(${props => props.thumbnail});
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const VideoDetailsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

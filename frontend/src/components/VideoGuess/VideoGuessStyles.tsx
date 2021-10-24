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

export const HigherLowerOptionsWrapper = styled(Box)`
  margin-top: 1%;
  display: flex;
  justify-content: center;
`;

export const HigherOptionWrapper = styled(Box)`
  margin-right: 10%;
`;
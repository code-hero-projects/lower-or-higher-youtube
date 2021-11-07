import { styled } from '@material-ui/system';

interface BackgroundImageWrapperProps {
  thumbnail: string;
}

export const VideoBackgroundImageWrapper = styled('img')<BackgroundImageWrapperProps>`
  position: absolute;
  background-image: url(${props => props.thumbnail});
  filter: brightness(50%);
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
`;

export const PageBackgroundImageWrapper = styled(VideoBackgroundImageWrapper)`
  filter: brightness(100%);
  opacity: 0.9;
`;

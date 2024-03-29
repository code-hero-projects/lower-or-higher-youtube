import { Box } from '@material-ui/core';
import { styled } from '@material-ui/system';

export interface VideoDetailsWrapperProps {
  hasTimer: boolean;
}

export const BaseWrapper = styled(Box)`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const FlexCenterWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OptionsCenterWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PageBaseWrapper = styled(FlexCenterWrapper)`
  height: 100vh;
  align-items: center;
`;

export const VideoDetailsWrapper = styled(FlexCenterWrapper)(({ hasTimer}: VideoDetailsWrapperProps) => ({
  alignItems: 'center',
  height: hasTimer ? '80%' : '100%',
  width: '100%'
}));

export const MarginBottomWrapperWrapper = styled(OptionsCenterWrapper)`
  margin-bottom: 2rem;
`;
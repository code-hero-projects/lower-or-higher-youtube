import { CircularProgress } from '@material-ui/core';
import { LoadingMessageWrapper, LoadingWrapper } from './LoadingStyled';

interface LoadingProps {
  message: string;
}

export function Loading({ message }: LoadingProps) {
  return (
    <LoadingWrapper>
      <CircularProgress thickness={6} color="inherit" />
      <LoadingMessageWrapper variant="h5">{message}</LoadingMessageWrapper>
    </LoadingWrapper>
  );
}
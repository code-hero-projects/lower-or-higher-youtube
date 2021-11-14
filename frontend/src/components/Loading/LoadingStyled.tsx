import { Box } from '@material-ui/core';
import { styled } from '@material-ui/system';
import { TypographyWrapper } from '../Styled';

export const LoadingWrapper = styled(Box)`
  display: flex;
  align-items: center;
  color: white;
`;

export const LoadingMessageWrapper = styled(TypographyWrapper)`
  margin-left: 1rem;
`;
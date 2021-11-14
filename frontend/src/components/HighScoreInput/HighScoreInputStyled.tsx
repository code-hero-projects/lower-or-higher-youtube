import { Alert, Box, Paper } from '@material-ui/core';
import { styled } from '@material-ui/system';

export const HighScoreInputWrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PaperWrapper = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 3px 0px 5px 5px;
  width: 22rem;
  margin-top: 2rem;
`;

export const AlertWrapper = styled(Alert)`
  margin-top: 1rem;
`;
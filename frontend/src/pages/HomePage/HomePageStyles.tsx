import { Box } from '@material-ui/core';
import { styled } from "@material-ui/system";
import { TypographyWrapper } from '../../components';

export const ContainerWrapper = styled(Box)`
  margin-bottom: 2rem;
  width: 100%;
`;

export const AdjustableTypography = styled(TypographyWrapper)`
  @media (max-width: 768px) {
    display: none;
  }
`;
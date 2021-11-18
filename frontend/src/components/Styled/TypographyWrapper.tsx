import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/system";
import { SmallDeviceMediaQuery } from './MediaQuery';

export const TypographyWrapper = styled(Typography)`
  text-shadow: 2px 2px 15px #000000;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

export const Title = styled(TypographyWrapper)`
  @media ${SmallDeviceMediaQuery} {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled(TypographyWrapper)`
  @media ${SmallDeviceMediaQuery} {
    font-size: 1.2rem;
  }
`;

export const Info = styled(TypographyWrapper)`
  @media ${SmallDeviceMediaQuery} {
    font-size: 1rem;
  }
`;

export const CornerSubtitle = styled(Subtitle)`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-botom: 0rem;
  @media ${SmallDeviceMediaQuery} {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
`;
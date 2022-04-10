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
  z-index: 1000;
  @media ${SmallDeviceMediaQuery} {
    font-size: 1.2rem;
  }
`;

export const Info = styled(TypographyWrapper)`
  @media ${SmallDeviceMediaQuery} {
    font-size: 1rem;
  }
`;

export const LeftCornerSubtitle = styled(Subtitle)`
  margin-top: 2rem;
  margin-left: 2rem;
  @media ${SmallDeviceMediaQuery} {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
`;

export const RightCornerSubtitle = styled(Subtitle)`
  margin-top: 2rem;
  margin-right: 2rem;
  @media ${SmallDeviceMediaQuery} {
    margin-top: 1rem;
    margin-left: 0.5rem;
  }
`;

export const AdjustableTypography = styled(TypographyWrapper)`
  @media (max-width: 768px) {
    display: none;
  }
`;
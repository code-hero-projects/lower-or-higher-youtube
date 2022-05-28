import { Box, Link } from '@material-ui/core';
import { styled } from "@material-ui/system";
import { SmallDeviceMediaQuery } from '../../components';


export const ContainerWrapper = styled(Box)`
  margin-bottom: 2rem;
  width: 100%;
`;

export const VideoLink = styled(Link)`
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 15px #000000;
  @media ${SmallDeviceMediaQuery} {
    font-size: 1.8rem;
  }
`;
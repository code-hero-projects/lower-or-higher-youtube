import { Box } from "@material-ui/core";
import { styled } from "@material-ui/system";
import { BackgroundImageWrapper } from "../../components";
import { TypographyWrapper } from "../../components/Styled";

export const BaseWrapper = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HomePageBackgroundImageWrapper = styled(BackgroundImageWrapper)`
  filter: brightness(100%);
  opacity: 0.9;
`;

export const SpacedTypographyWrapper = styled(TypographyWrapper)`
  margin-bottom: 2rem;
`;

export const ContainerWrapper = styled(Box)`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;
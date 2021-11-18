import { CountrySelectorContainer, GameStartContainer, PageBaseWrapper, PageBackgroundImageWrapper, Title } from "../../components";
import { AdjustableTypography, ContainerWrapper } from "./HomePageStyles";

export function HomePage() {
  return (
    <PageBaseWrapper>
      <PageBackgroundImageWrapper thumbnail="/images/landscape-background.jpg" />
      <Title variant="h3" align="center">What are the most viewed videos in each country?</Title>
      <ContainerWrapper>
        <AdjustableTypography variant="h5" align="center">A game of higher and lower using YouTube videos.</AdjustableTypography>
        <AdjustableTypography variant="h5" align="center">The data gets refreshed everyday!</AdjustableTypography>
      </ContainerWrapper>
      <ContainerWrapper>
        <CountrySelectorContainer />
      </ContainerWrapper>
      <GameStartContainer />
    </PageBaseWrapper>
  );
}
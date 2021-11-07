import { CountrySelectorContainer, GameStartContainer, TypographyWrapper, PageBaseWrapper, PageBackgroundImageWrapper } from "../../components";
import { ContainerWrapper, SpacedTypographyWrapper } from "./HomePageStyles";

export function HomePage() {
  return (
    <PageBaseWrapper>
      <PageBackgroundImageWrapper thumbnail="/images/landscape-background.jpg" />
      <SpacedTypographyWrapper variant="h3" align="center">What are the most viewed videos in each country?</SpacedTypographyWrapper>
      <SpacedTypographyWrapper>
        <TypographyWrapper variant="h5" align="center">A game of higher and lower using YouTube videos.</TypographyWrapper>
        <TypographyWrapper variant="h5" align="center">The data gets refreshed everyday!</TypographyWrapper>
      </SpacedTypographyWrapper>
      <SpacedTypographyWrapper variant="h3" align="center">Select a country to start the game</SpacedTypographyWrapper>
      <ContainerWrapper>
        <CountrySelectorContainer />
      </ContainerWrapper>
      <ContainerWrapper>
        <GameStartContainer />
      </ContainerWrapper>
    </PageBaseWrapper>
  );
}
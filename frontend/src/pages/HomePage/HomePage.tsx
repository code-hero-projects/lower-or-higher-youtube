import { CountrySelectorContainer, GameStartContainer, TypographyWrapper, PageBaseWrapper, PageBackgroundImageWrapper, SpacedTypographyWrapper } from "../../components";
import { ContainerWrapper } from "./HomePageStyles";

export function HomePage() {
  return (
    <PageBaseWrapper>
      <PageBackgroundImageWrapper thumbnail="/images/landscape-background.jpg" />
      <SpacedTypographyWrapper variant="h3" align="center">What are the most viewed videos in each country?</SpacedTypographyWrapper>
      <ContainerWrapper>
        <TypographyWrapper variant="h5" align="center">A game of higher and lower using YouTube videos.</TypographyWrapper>
        <TypographyWrapper variant="h5" align="center">The data gets refreshed everyday!</TypographyWrapper>
      </ContainerWrapper>
      <ContainerWrapper>
        <CountrySelectorContainer />
      </ContainerWrapper>
      <GameStartContainer />
    </PageBaseWrapper>
  );
}
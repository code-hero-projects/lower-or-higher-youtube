import { CountrySelectorContainer, GameStartContainer, PageBaseWrapper, PageBackgroundImageWrapper, Title, AdjustableTypography, TimerOptionContainer } from "../../components";
import { ContainerWrapper, VideoLink } from "./HomePageStyles";

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
      <ContainerWrapper>
        <TimerOptionContainer />
        <AdjustableTypography variant="h5" align="center" marginTop={2}>When you play with timer you can get bonus points!</AdjustableTypography>
        <AdjustableTypography variant="h5" align="center">50 points if you guess within 5 seconds, 20 points if you guess within 10 seconds!</AdjustableTypography>
      </ContainerWrapper>
      <GameStartContainer />
      <VideoLink marginTop={5} variant="h4" underline="hover" align="center" href="https://www.youtube.com/watch?v=FJVYuKRqeIc" target="_blank">Click here to see how the game was made!</VideoLink>
    </PageBaseWrapper>
  );
}
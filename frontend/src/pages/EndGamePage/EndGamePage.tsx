import { EndGameCountrySelectorContainer, EndGameScoreContainer, PageBaseWrapper, PageBackgroundImageWrapper, RestartGameContainer, ShowLeaderboardContainer } from "../../components";
import { OptionsWrapper } from "./EndGamePageStyled";

export function EndGamePage() {
  return (
    <PageBaseWrapper>
      <PageBackgroundImageWrapper thumbnail="/images/landscape-background.jpg" />
      <EndGameScoreContainer />
      <OptionsWrapper>
        <RestartGameContainer />
      </OptionsWrapper>
      <OptionsWrapper>
        <EndGameCountrySelectorContainer />
      </OptionsWrapper>
      <OptionsWrapper>
        <ShowLeaderboardContainer />
      </OptionsWrapper>
    </PageBaseWrapper>
  );
}
import { EndGameCountrySelectorContainer, EndGameScoreContainer, PageBaseWrapper, PageBackgroundImageWrapper, RestartGameContainer, ShowLeaderboardContainer, HighScoreInputContainer } from "../../components";
import { OptionsWrapper } from "./EndGamePageStyled";

export function EndGamePage() {
  return (
    <PageBaseWrapper>
      <PageBackgroundImageWrapper thumbnail="/images/landscape-background.jpg" />
      <EndGameScoreContainer />
      <HighScoreInputContainer />
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
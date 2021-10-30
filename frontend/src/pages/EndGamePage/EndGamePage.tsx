import { EndGameCountrySelectorContainer, EndGameScoreContainer, RestartGameContainer } from "../../components";
import { BaseWrapper, EndGamePageBackgroundImageWrapper, OptionsWrapper } from "./EndGamePageStyled";

export function EndGamePage() {
  return (
    <BaseWrapper>
      <EndGamePageBackgroundImageWrapper thumbnail="/images/landscape-background.jpg" />
      <EndGameScoreContainer />
      <OptionsWrapper>
        <RestartGameContainer />
      </OptionsWrapper>
      <OptionsWrapper>
        <EndGameCountrySelectorContainer />
      </OptionsWrapper>
    </BaseWrapper>
  );
}
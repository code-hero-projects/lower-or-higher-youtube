import { EndGameCountrySelectorContainer, EndGameScoreContainer, RestartGameContainer } from "../../components";
import { BaseWrapper, OptionsWrapper } from "./EndGamePageStyled";

export function EndGamePage() {
  return (
    <BaseWrapper>
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
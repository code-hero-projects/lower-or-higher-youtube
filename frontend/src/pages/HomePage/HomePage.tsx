import { Typography } from "@material-ui/core";
import { CountrySelectorContainer, GameStartContainer, InstructionsContainer } from "../../containers";
import { BaseWrapper, ContainerWrapper, GameStartContainerWrapper } from "./HomePageStyles";

export function HomePage() {
  return (
    <BaseWrapper>
      <Typography variant="h3" align="center">Select a country to start the game</Typography>
      <ContainerWrapper>
        <CountrySelectorContainer />
      </ContainerWrapper>
      <ContainerWrapper>
        <GameStartContainerWrapper>
          <GameStartContainer />
        </GameStartContainerWrapper>
        <InstructionsContainer />
      </ContainerWrapper>
    </BaseWrapper>
  );
}
import { Typography } from "@material-ui/core";
import { CountrySelectorContainer, GameStartContainer, InstructionsContainer } from "../../containers";
import { BaseWrapper, ContainerWrapper } from "./HomePageStyles";

export function HomePage() {
  return (
    <BaseWrapper>
      <Typography variant="h3" align="center">Select a country to start the game</Typography>
      <ContainerWrapper>
        <CountrySelectorContainer />
      </ContainerWrapper>
      <ContainerWrapper>
        <GameStartContainer />
      </ContainerWrapper>
    </BaseWrapper>
  );
}
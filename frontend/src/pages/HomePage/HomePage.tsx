import { CountrySelectorContainer, GameStartContainer, InstructionsContainer } from "../../containers";
import { Box, Typography } from '@mui/material';

export function HomePage() {
  return (
    <Box sx= {{ marginTop: '15%' }}>
      <Typography variant="h3" align="center">Select a country to start the game</Typography>
      <Box sx={{ marginTop: '3%', display: 'flex', justifyContent: 'center' }}>
        <CountrySelectorContainer />
      </Box>
      <Box sx={{ marginTop: '3%', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ marginRight: '3%' }}>
          <GameStartContainer />
        </Box>
        <InstructionsContainer />
      </Box>
    </Box>
  );
}
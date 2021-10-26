import { Box } from "@material-ui/core";
import { VideoGuessContainer, VideoInfoContainer } from "../../containers";

export function InGamePage() {
  return (
    <Box sx={{display: 'flex', width: '100%', height: '100vh'}}>
      <Box sx={{flex: 1}}>
        <VideoInfoContainer />
      </Box>
      <Box sx={{flex: 1}}>
        <VideoGuessContainer />
      </Box>
    </Box>
  );
}
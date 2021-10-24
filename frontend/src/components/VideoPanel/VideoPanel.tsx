import { Box, Typography } from "@mui/material";
import { Video } from "../../models";

interface VideoPanelProps {
  video: Video;
  showViews?: boolean;
}

export function VideoPanel({ video, showViews }: VideoPanelProps) {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ backgroundImage: `url(${video.thumbnail})`, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Typography color="common.white">{video.name}</Typography>
          <Typography color="common.white">By {video.channel}</Typography>
          {showViews && <Typography color="common.white" sx={{display: 'block'}}>{video.views}</Typography>}
        </Box>
      </Box>
    </Box>
  );
}
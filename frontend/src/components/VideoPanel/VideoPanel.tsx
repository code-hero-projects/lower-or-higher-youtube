import { Typography } from "@material-ui/core";
import { Video } from "../../models";
import { BackgroundImageWrapper, BaseWrapper, VideoDetailsWrapper } from "./VideoPanelStyles";

export interface VideoPanelProps {
  video: Video;
  showViews?: boolean;
}

export function VideoPanel({ video, showViews }: VideoPanelProps) {
  return (
    <BaseWrapper>
      <BackgroundImageWrapper video={video}>
        <VideoDetailsWrapper>
          <Typography color="common.white">{video.name}</Typography>
          <Typography color="common.white">By {video.channel}</Typography>
          {showViews && <Typography color="common.white">{video.views}</Typography>}
        </VideoDetailsWrapper>
      </BackgroundImageWrapper>
    </BaseWrapper>
  );
}
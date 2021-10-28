import { Typography } from "@material-ui/core";
import { Video } from "../../models";
import { Score } from "./Score";
import { BackgroundImageWrapper, BaseWrapper, VideoDetailsWrapper } from "./VideoInfoStyles";

interface VideoInfoProps {
  video: Video;
  currentScore: number;
}

export function VideoInfo({ video, currentScore }: VideoInfoProps) {
  return (
    <BaseWrapper>
      <BackgroundImageWrapper thumbnail={video.thumbnail}>
        <Score currentScore={currentScore} />
        <VideoDetailsWrapper>
          <Typography variant="h3" color="common.white">{video.name}</Typography>
          <Typography variant="h4" color="common.white">By {video.channel}</Typography>
          <Typography variant="h3" color="common.white">Has {video.views} views</Typography>
        </VideoDetailsWrapper>
      </BackgroundImageWrapper>
    </BaseWrapper>
  );
}
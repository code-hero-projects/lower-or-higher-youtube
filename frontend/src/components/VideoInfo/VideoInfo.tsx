import { Typography } from "@material-ui/core";
import { Video } from "../../models";
import { BackgroundImageWrapper, BaseWrapper, VideoDetailsWrapper } from "./VideoInfoStyles";

interface VideoInfoProps {
  video: Video;
}

export function VideoInfo({ video }: VideoInfoProps) {
  return (
    <BaseWrapper>
      <BackgroundImageWrapper thumbnail={video.thumbnail}>
        <VideoDetailsWrapper>
          <Typography color="common.white">{video.name}</Typography>
          <Typography color="common.white">By {video.channel}</Typography>
          <Typography color="common.white">{video.views}</Typography>
        </VideoDetailsWrapper>
      </BackgroundImageWrapper>
    </BaseWrapper>
  );
}
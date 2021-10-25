import { Typography } from "@material-ui/core";
import { Video } from "../../models";
import { Score } from "../Score";
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
          <Typography color="common.white">{video.name}</Typography>
          <Typography color="common.white">By {video.channel}</Typography>
          <Typography color="common.white">{video.views}</Typography>
        </VideoDetailsWrapper>
      </BackgroundImageWrapper>
    </BaseWrapper>
  );
}
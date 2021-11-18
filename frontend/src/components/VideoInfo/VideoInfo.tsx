import { Video } from "../../models";
import { VideoBackgroundImageWrapper, BaseWrapper, VideoDetailsWrapper, Subtitle, Info } from "../Styled";
import { Score } from "./Score";

interface VideoInfoProps {
  video: Video;
  currentScore: number;
}

export function VideoInfo({ video, currentScore }: VideoInfoProps) {
  return (
    <BaseWrapper>
      <VideoBackgroundImageWrapper thumbnail={video.thumbnail} />
      <Score currentScore={currentScore} />
      <VideoDetailsWrapper>
        <Subtitle variant="h3" align="center">{video.name}</Subtitle>
        <Info variant="h4">By {video.channel}</Info>
        <Subtitle variant="h3">Has {video.views.toLocaleString()} views</Subtitle>
      </VideoDetailsWrapper>
    </BaseWrapper>
  );
}
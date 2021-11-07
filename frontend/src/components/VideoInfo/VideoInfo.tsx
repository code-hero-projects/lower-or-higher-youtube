import { Video } from "../../models";
import { VideoBackgroundImageWrapper, BaseWrapper, TypographyWrapper, VideoDetailsWrapper } from "../Styled";
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
        <TypographyWrapper variant="h3">{video.name}</TypographyWrapper>
        <TypographyWrapper variant="h4">By {video.channel}</TypographyWrapper>
        <TypographyWrapper variant="h3">Has {video.views.toLocaleString()} views</TypographyWrapper>
      </VideoDetailsWrapper>
    </BaseWrapper>
  );
}
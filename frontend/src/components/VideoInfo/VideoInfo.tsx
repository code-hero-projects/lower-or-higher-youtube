import { Box } from '@material-ui/system';
import { Video } from "../../models";
import { VideoBackgroundImageWrapper, BaseWrapper, VideoDetailsWrapper, Subtitle, Info } from "../Styled";
import { HighScore } from './HighScore';
import { Score } from "./Score";

interface VideoInfoProps {
  video: Video;
  currentScore: number;
  highScore: number;
}

export function VideoInfo({ video, currentScore, highScore }: VideoInfoProps) {
  return (
    <BaseWrapper>
      <VideoBackgroundImageWrapper thumbnail={video.thumbnail} />
      <Box display="flex">
        <Box flexGrow={1}>
          <Score currentScore={currentScore} />
        </Box>
        <HighScore highScore={highScore} />
      </Box>
      <VideoDetailsWrapper>
        <Subtitle variant="h3" align="center">{video.name}</Subtitle>
        <Info variant="h4">By {video.channel}</Info>
        <Subtitle variant="h3">Has {video.views.toLocaleString()} views</Subtitle>
      </VideoDetailsWrapper>
    </BaseWrapper>
  );
}
import { Typography } from "@material-ui/core";
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Video } from "../../models";
import { HigherLowerOption } from "../HigherLowerOption";
import { BackgroundImageWrapper, BaseWrapper, HigherLowerOptionsWrapper, HigherOptionWrapper, VideoDetailsWrapper } from "./VideoGuessStyles";

export interface VideoGuessProps {
  video: Video;
  onHigherOption: () => void;
  onLowerOption: () => void;
}

export function VideoGuess({ video, onHigherOption, onLowerOption }: VideoGuessProps) {
  return (
    <BaseWrapper>
      <BackgroundImageWrapper thumbnail={video.thumbnail}>
        <VideoDetailsWrapper>
          <Typography color="common.white">{video.name}</Typography>
          <Typography color="common.white">By {video.channel}</Typography>
          <HigherLowerOptionsWrapper>
            <HigherOptionWrapper>
              <HigherLowerOption text="higher" color="success" icon={<ExpandLess />} onOption={onHigherOption} />
            </HigherOptionWrapper>
            <HigherLowerOption text="lower" color="error" icon={<ExpandMore />}  onOption={onLowerOption}/>
          </HigherLowerOptionsWrapper>
        </VideoDetailsWrapper>
      </BackgroundImageWrapper>
    </BaseWrapper>
  );
}
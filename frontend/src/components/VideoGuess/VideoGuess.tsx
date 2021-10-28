import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Video } from "../../models";
import { BackgroundImageWrapper, BaseWrapper, TypographyWrapper, VideoDetailsWrapper } from "../Styled";
import { HigherLowerOption } from "./HigherLowerOption";
import { Timer } from "./Timer";
import { HigherLowerOptionsWrapper, HigherOptionWrapper } from "./VideoGuessStyles";

export interface VideoGuessProps {
  videoToGuess: Video;
  videoGuessed: Video;
  time: number;
  onHigherOption: () => void;
  onLowerOption: () => void;
  onUpdateTimer: (currentTime: number) => void;
}

export function VideoGuess({ videoToGuess, videoGuessed, onHigherOption, onLowerOption, time, onUpdateTimer }: VideoGuessProps) {
  return (
    <BaseWrapper>
      <BackgroundImageWrapper thumbnail={videoToGuess.thumbnail} />
      <Timer time={time} onUpdateTime={onUpdateTimer} />
      <VideoDetailsWrapper>
        <TypographyWrapper variant="h3" color="common.white">{videoToGuess.name}</TypographyWrapper>
        <TypographyWrapper variant="h4" color="common.white">By {videoToGuess.channel}</TypographyWrapper>
        <TypographyWrapper color="common.white">Has</TypographyWrapper>
        <HigherLowerOptionsWrapper>
          <HigherOptionWrapper>
            <HigherLowerOption text="higher" color="success" icon={<ExpandLess />} onOption={onHigherOption} />
          </HigherOptionWrapper>
          <HigherLowerOption text="lower" color="error" icon={<ExpandMore />}  onOption={onLowerOption}/>
        </HigherLowerOptionsWrapper>
        <TypographyWrapper color="common.white">Views than {videoGuessed.name}</TypographyWrapper>
      </VideoDetailsWrapper>
    </BaseWrapper>
  );
}
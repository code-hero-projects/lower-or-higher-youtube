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
  showViews: boolean;
  onHigherOption: () => void;
  onLowerOption: () => void;
  onUpdateTimer: (currentTime: number) => void;
}

export function VideoGuess({ videoToGuess, videoGuessed, time, showViews, onHigherOption, onLowerOption, onUpdateTimer }: VideoGuessProps) {
  return (
    <BaseWrapper>
      <BackgroundImageWrapper thumbnail={videoToGuess.thumbnail} />
      <Timer time={time} onUpdateTime={onUpdateTimer} />
      <VideoDetailsWrapper>
        <TypographyWrapper variant="h3">{videoToGuess.name}</TypographyWrapper>
        <TypographyWrapper variant="h4">By {videoToGuess.channel}</TypographyWrapper>
        <TypographyWrapper>Has</TypographyWrapper>
        <HigherLowerOptionsWrapper>
          {!showViews &&
            <>
              <HigherOptionWrapper>
                <HigherLowerOption text="higher" color="success" icon={<ExpandLess />} onOption={onHigherOption} />
              </HigherOptionWrapper>
              <HigherLowerOption text="lower" color="error" icon={<ExpandMore />}  onOption={onLowerOption}/>
            </>
          }
          {showViews && <TypographyWrapper variant="h3">Has {videoToGuess.views.toLocaleString()} views</TypographyWrapper>}
        </HigherLowerOptionsWrapper>
        <TypographyWrapper>Views than {videoGuessed.name}</TypographyWrapper>
      </VideoDetailsWrapper>
    </BaseWrapper>
  );
}
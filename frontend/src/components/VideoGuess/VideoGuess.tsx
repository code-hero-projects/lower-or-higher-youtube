import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Video } from "../../models";
import { VideoBackgroundImageWrapper, BaseWrapper, TypographyWrapper, VideoDetailsWrapper } from "../Styled";
import { HigherLowerOption } from "./HigherLowerOption";
import { Timer } from "./Timer";
import { HigherLowerOptionsWrapper, HigherOptionWrapper, ShowViewsWrapper } from "./VideoGuessStyles";

export interface VideoGuessProps {
  videoToGuess: Video;
  videoGuessed: Video;
  time: number;
  stopTime: boolean;
  showViews: boolean;
  onHigherOption: () => void;
  onLowerOption: () => void;
  onUpdateTimer: (currentTime: number) => void;
}

export function VideoGuess({ videoToGuess, videoGuessed, time, stopTime, showViews, onHigherOption, onLowerOption, onUpdateTimer }: VideoGuessProps) {
  return (
    <BaseWrapper>
      <VideoBackgroundImageWrapper thumbnail={videoToGuess.thumbnail} />
      <Timer time={time} stopTime={stopTime} onUpdateTime={onUpdateTimer} />
      <VideoDetailsWrapper>
        <TypographyWrapper variant="h3">{videoToGuess.name}</TypographyWrapper>
        <TypographyWrapper variant="h4">By {videoToGuess.channel}</TypographyWrapper>
        <TypographyWrapper>Has</TypographyWrapper>
        <HigherLowerOptionsWrapper>
          {!showViews &&
            <>
              <HigherOptionWrapper showViews={showViews}>
                <HigherLowerOption text="higher" color="success" icon={<ExpandLess />} onOption={onHigherOption} />
              </HigherOptionWrapper>
              <HigherLowerOption text="lower" color="error" icon={<ExpandMore />}  onOption={onLowerOption}/>
            </>
          }
          {showViews && 
            <ShowViewsWrapper showViews={showViews}>
              <TypographyWrapper variant="h3">Has {videoToGuess.views.toLocaleString()} views</TypographyWrapper>
            </ShowViewsWrapper>
          }
        </HigherLowerOptionsWrapper>
        <TypographyWrapper>Views than {videoGuessed.name}</TypographyWrapper>
      </VideoDetailsWrapper>
    </BaseWrapper>
  );
}
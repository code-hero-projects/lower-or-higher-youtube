import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Video } from "../../models";
import { VideoBackgroundImageWrapper, BaseWrapper, VideoDetailsWrapper, Subtitle, Info, truncateString } from "../Styled";
import { HigherLowerOption } from "./HigherLowerOption";
import { Timer } from './Timer';
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
        <Subtitle variant="h3" align="center">{truncateString(videoToGuess.name)}</Subtitle>
        <Info variant="h4">By {videoToGuess.channel}</Info>
        <Info>Has</Info>
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
              <Subtitle variant="h3">Has {videoToGuess.views.toLocaleString()} views</Subtitle>
            </ShowViewsWrapper>
          }
        </HigherLowerOptionsWrapper>
        <Info align="center">Views than {truncateString(videoGuessed.name)}</Info>
      </VideoDetailsWrapper>
    </BaseWrapper>
  );
}
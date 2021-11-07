import { useSelector } from "react-redux";
import { Video } from '../../models';
import { selectScoreState } from "../../redux";
import { VideoInfo } from "./VideoInfo";

export interface VideoContainerProps {
  video: Video;
}

export function VideoInfoContainer({ video }: VideoContainerProps) {
  const { score } = useSelector(selectScoreState);

  return <VideoInfo video={video} currentScore={score} />;
}
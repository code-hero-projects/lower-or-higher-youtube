import { useSelector } from "react-redux";
import { Video } from '../../models';
import { selectGameState } from "../../redux";
import { VideoInfo } from "./VideoInfo";

export interface VideoContainerProps {
  video: Video;
}

export function VideoInfoContainer({ video }: VideoContainerProps) {
  const { score } = useSelector(selectGameState);

  return <VideoInfo video={video} currentScore={score} />;
}
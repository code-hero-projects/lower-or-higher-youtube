import { useSelector } from "react-redux";
import { VideoInfo } from "../../components";
import { selectGameState, selectVideoState } from "../../redux";

export function VideoInfoContainer() {
  const { videoGuessed } = useSelector(selectVideoState);
  const { score } = useSelector(selectGameState);

  return <VideoInfo video={videoGuessed!} currentScore={score} />;
}
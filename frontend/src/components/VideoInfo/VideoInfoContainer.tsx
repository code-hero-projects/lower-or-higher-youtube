import { useSelector } from "react-redux";
import { selectGameState, selectVideoState } from "../../redux";
import { VideoInfo } from "./VideoInfo";

export function VideoInfoContainer() {
  const { videoGuessed } = useSelector(selectVideoState);
  const { score } = useSelector(selectGameState);

  return <VideoInfo video={videoGuessed} currentScore={score} />;
}
import { AsyncOperationState } from '../../models';
import { Loading } from '../Loading';
import { GameStartButtonWrapper } from "./GameStartStyled";
import { Error } from '../Error';

interface GameStartProps {
  fetchCountriesOperationState: AsyncOperationState;
  fetchVideosOperationState: AsyncOperationState;
  onLoadVideos: () => void;
  onStartGame: () => void;
}

export function GameStart({ fetchCountriesOperationState, fetchVideosOperationState, onLoadVideos, onStartGame }: GameStartProps) {
  const fetchingCountries = fetchCountriesOperationState !== AsyncOperationState.Success;

  if (fetchingCountries) {
    return <GameStartButtonWrapper variant="contained" size="large" color="success" disabled={fetchingCountries}>Start game</GameStartButtonWrapper>;
  }

  if (fetchVideosOperationState === AsyncOperationState.None) {
    return <GameStartButtonWrapper variant="contained" size="large" color="success" onClick={onLoadVideos}>Start game</GameStartButtonWrapper>;
  }

  if (fetchVideosOperationState === AsyncOperationState.Loading) {
    return <Loading message="Loading videos" />;
  }

  if (fetchVideosOperationState === AsyncOperationState.Error) {
    return <Error message="Error fetching videos." />;
  }

  onStartGame();
  return <></>;
}
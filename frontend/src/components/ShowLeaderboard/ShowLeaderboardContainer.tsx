import { useDispatch, useSelector } from 'react-redux'
import { CurrentGameState } from '../../models';
import { selectGameState, showEndGameLeaderboard, showLeaderboard } from '../../redux'
import { ShowLeaderboard } from './ShowLeaderboard';

export function ShowLeaderboardContainer() {
  const { gameState } = useSelector(selectGameState);
  const dispatch = useDispatch();
  
  const onShowLeaderboard = () => {
    const actionToDispatch = gameState === CurrentGameState.NotStarted ? showLeaderboard : showEndGameLeaderboard;
    dispatch(actionToDispatch());
  };

  return <ShowLeaderboard onShowLeaderboard={onShowLeaderboard} />;
}
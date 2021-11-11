import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentGameState } from '../../models';
import { endGame, getScores, resetGame, selectGameState, selectScoreState } from '../../redux';
import { Leaderboard } from './Leaderboard';

export function LeaderboardContainer() {
  const { leaderboardScores } = useSelector(selectScoreState);
  const { gameState } = useSelector(selectGameState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScores())
  }, []);

  const onBackFromLeaderboard = () => {
    const actionToDispatch = gameState === CurrentGameState.Leaderboard ? resetGame : endGame;
    dispatch(actionToDispatch());
  };
  
  return <Leaderboard scores={leaderboardScores} onBackFromLeaderboard={onBackFromLeaderboard} gameState={gameState} />;
}
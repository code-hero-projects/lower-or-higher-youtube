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

  const leaderboard = gameState === CurrentGameState.Leaderboard;
  const gamePageText = leaderboard ? "Start Game" : "End Game";

  const onBackFromLeaderboard = () => {
    const actionToDispatch = leaderboard ? resetGame : endGame;
    dispatch(actionToDispatch());
  };
  
  return <Leaderboard scores={leaderboardScores} onBackFromLeaderboard={onBackFromLeaderboard} gamePageText={gamePageText} />;
}
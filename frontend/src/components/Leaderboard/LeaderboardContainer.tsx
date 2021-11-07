import { useSelector } from 'react-redux';
import { selectScoreState } from '../../redux';
import { Leaderboard } from './Leaderboard';

export function LeaderboardContainer() {
  const { leaderboardScores } = useSelector(selectScoreState);

  return <Leaderboard scores={leaderboardScores} />;
}
import { Box } from '@material-ui/core';
import { Score } from '../../models';
import { ScoreTable } from './ScoreTable';

interface LeaderboardProps {
  scores: Score[];
}

export function Leaderboard({ scores }: LeaderboardProps) {
  return (
    <Box>
      <ScoreTable scores={scores} />
    </Box>
  );
}
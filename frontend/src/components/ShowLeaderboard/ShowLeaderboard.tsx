import { Button } from '@material-ui/core';
import { EndIcon } from './EndIcon';

interface ShowLeaderboardProps {
  onShowLeaderboard: () => void;
}

export function ShowLeaderboard({ onShowLeaderboard }: ShowLeaderboardProps) {
  return <Button variant="contained" size="large" onClick={onShowLeaderboard} endIcon={<EndIcon />} color="success">Show leaderboard</Button>;
}
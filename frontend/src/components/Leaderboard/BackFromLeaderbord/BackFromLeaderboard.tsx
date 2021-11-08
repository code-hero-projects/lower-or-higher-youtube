import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';


interface BackFromLeaderboardProps {
  onBackFromLeaderboard: () => void;
  gamePage: string;
}

export function BackFromLeaderboard({ onBackFromLeaderboard, gamePage }: BackFromLeaderboardProps) {
  return <Button variant="contained" size="large" onClick={onBackFromLeaderboard} endIcon={<ArrowBack />} color="success">Back to {gamePage} page</Button>;
}
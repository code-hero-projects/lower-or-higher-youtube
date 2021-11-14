import { Button } from '@material-ui/core';
import { ReactNode } from 'react';

interface BackFromLeaderboardProps {
  onBackFromLeaderboard: () => void;
  gamePage: string;
  endIcon: ReactNode;
}

export function BackFromLeaderboard({ onBackFromLeaderboard, gamePage, endIcon }: BackFromLeaderboardProps) {
  return <Button variant="contained" size="large" onClick={onBackFromLeaderboard} endIcon={endIcon} color="success">Back to {gamePage} page</Button>;
}
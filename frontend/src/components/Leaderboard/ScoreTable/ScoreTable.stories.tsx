import { Box } from '@material-ui/core';
import { Score } from '../../../models';
import { ScoreTable } from "./ScoreTable";

const scores: Score[] = [
  { playerName: 'player one', points: 1000, country: 'England' },
  { playerName: 'player two', points: 950, country: 'United States' },
  { playerName: 'player three', points: 720, country: 'France' },
  { playerName: 'player four', points: 650, country: 'Canada' },
  { playerName: 'player five', points: 500, country: 'Japan' },
  { playerName: 'player six', points: 350, country: 'Australia' },
  { playerName: 'player seven', points: 260, country: 'Argentina' },
  { playerName: 'player eight', points: 200, country: 'Thailand' },
  { playerName: 'player nine', points: 150, country: 'South Africa' },
  { playerName: 'player ten', points: 50, country: 'Egypt' },
  { playerName: 'player eleven', points: 0, country: 'Mexico' },
];

export const DisplayLeaderboard = () => <ScoreTable scores={scores}/>;

export const DisplayLeaderboardStickyHeader = () => <Box maxWidth="500px"><ScoreTable scores={scores}/></Box>;

export default {
  title: 'Components/ScoreTable',
  components: ScoreTable
};
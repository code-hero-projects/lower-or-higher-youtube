import { Box } from '@material-ui/core';
import { Score } from '../../../models';
import { ScoreTable } from "./ScoreTable";

const scores: Score[] = [
  { playerName: 'player one', points: 1000, countryName: 'England' },
  { playerName: 'player two', points: 950, countryName: 'United States' },
  { playerName: 'player three', points: 720, countryName: 'France' },
  { playerName: 'player four', points: 650, countryName: 'Canada' },
  { playerName: 'player five', points: 500, countryName: 'Japan' },
  { playerName: 'player six', points: 350, countryName: 'Australia' },
  { playerName: 'player seven', points: 260, countryName: 'Argentina' },
  { playerName: 'player eight', points: 200, countryName: 'Thailand' },
  { playerName: 'player nine', points: 150, countryName: 'South Africa' },
  { playerName: 'player ten', points: 50, countryName: 'Egypt' },
  { playerName: 'player eleven', points: 0, countryName: 'Mexico' },
];

export const DisplayLeaderboard = () => <ScoreTable scores={scores}/>;

export const DisplayLeaderboardStickyHeader = () => <Box maxWidth="500px"><ScoreTable scores={scores}/></Box>;

export default {
  title: 'Components/ScoreTable',
  components: ScoreTable
};
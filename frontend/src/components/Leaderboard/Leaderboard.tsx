import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { CurrentGameState, Score } from '../../models';
import { BackFromLeaderboard } from './BackFromLeaderbord';
import { BackFromLeaderboardWrapper, LeaderboardWrapper } from './LeaderboardStyled';
import { ScoreTable } from './ScoreTable';

interface LeaderboardProps {
  scores: Score[];
  onBackFromLeaderboard: () => void;
  gameState: CurrentGameState;
}

export function Leaderboard({ scores, onBackFromLeaderboard, gameState }: LeaderboardProps) {
  const leaderboard = gameState === CurrentGameState.Leaderboard;
  const gamePageText = leaderboard ? "Start Game" : "End Game";
  const endIcon = leaderboard ? <ArrowForward /> : <ArrowBack />;

  return (
    <LeaderboardWrapper>
      <ScoreTable scores={scores} />
      <BackFromLeaderboardWrapper>
        <BackFromLeaderboard onBackFromLeaderboard={onBackFromLeaderboard} gamePage={gamePageText} endIcon={endIcon} />
      </BackFromLeaderboardWrapper>
    </LeaderboardWrapper>
  );
}
import { Score } from '../../models';
import { BackFromLeaderboard } from './BackFromLeaderbord';
import { BackFromLeaderboardWrapper, LeaderboardWrapper } from './LeaderboardStyled';
import { ScoreTable } from './ScoreTable';

interface LeaderboardProps {
  scores: Score[];
  onBackFromLeaderboard: () => void;
  gamePageText: string;
}

export function Leaderboard({ scores, onBackFromLeaderboard, gamePageText }: LeaderboardProps) {
  return (
    <LeaderboardWrapper>
      <ScoreTable scores={scores} />
      <BackFromLeaderboardWrapper>
        <BackFromLeaderboard onBackFromLeaderboard={onBackFromLeaderboard} gamePage={gamePageText} />
      </BackFromLeaderboardWrapper>
    </LeaderboardWrapper>
  );
}
import { LeaderboardContainer, PageBackgroundImageWrapper, TypographyWrapper } from '../../components';
import { LeaderboardElementWrapper, LeaderboardTableWrapper, LeaderboardWrapper } from './LeaderboardStyled';

export function LeaderboardPage() {
  return (
    <LeaderboardWrapper>
      <PageBackgroundImageWrapper thumbnail="/images/landscape-background.jpg" />
      <LeaderboardElementWrapper>
        <TypographyWrapper align="center" variant="h3">Leaderboard</TypographyWrapper>
      </LeaderboardElementWrapper>
      <LeaderboardTableWrapper>
        <LeaderboardContainer />
      </LeaderboardTableWrapper>
    </LeaderboardWrapper>
  );
}
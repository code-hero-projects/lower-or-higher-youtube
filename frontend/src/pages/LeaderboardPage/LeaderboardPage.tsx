import { LeaderboardContainer, PageBackgroundImageWrapper, PageBaseWrapper, TypographyWrapper } from '../../components';

export function LeaderboardPage() {
  return (
    <PageBaseWrapper>
      <PageBackgroundImageWrapper thumbnail="/images/landscape-background.jpg" />
      <TypographyWrapper variant="h3">Leaderboard</TypographyWrapper>
      <LeaderboardContainer />
    </PageBaseWrapper>
  );
}
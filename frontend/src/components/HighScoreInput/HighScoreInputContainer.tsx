import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AsyncOperationState, Score } from '../../models';
import { getScores, selectCountryState, selectScoreState } from '../../redux';
import { addScore } from '../../redux/score';
import { HighScoreInput } from './HighScoreInput';

export function HighScoreInputContainer() {
  const { score, leaderboardScores, fetchOperationState } = useSelector(selectScoreState);
  const { selectedCountry } = useSelector(selectCountryState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScores());
  }, []);

  if (fetchOperationState === AsyncOperationState.Loading || fetchOperationState === AsyncOperationState.None) {
    return <p>Loading...</p>;
  }

  if (leaderboardScores.length === 0 || score > leaderboardScores[leaderboardScores.length - 1].points) {
    const onNameInput = (name: string) => {
      const scoreToAdd: Score = {
        countryId: selectedCountry,
        playerName: name,
        points: score
      };
      
      dispatch(addScore(scoreToAdd));
    }

    return <HighScoreInput onNameInput={onNameInput} />;
  }

  return <></>;
}
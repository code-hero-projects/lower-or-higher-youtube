import { Button, InputBase } from '@material-ui/core';
import { useState } from 'react';
import { TypographyWrapper } from '..';
import { AlertWrapper, HighScoreInputWrapper, PaperWrapper } from './HighScoreInputStyled';

interface HighScoreInputProps {
  onNameInput: (name: string) => void;
}

export function HighScoreInput({ onNameInput}: HighScoreInputProps) {
  const [name, setName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onEnterName();
    }
  };

  const onEnterName = () => {
    if (name === '') {
      setErrorMessage('Name must not be empty.');
    } else if (name.length > 15) {
      setErrorMessage('Name must be less than 15 characters.');
    } else {
      setErrorMessage('');
      onNameInput(name);
    }
  };

  return (
    <HighScoreInputWrapper>
      <TypographyWrapper>You got a high score!</TypographyWrapper>
      <TypographyWrapper>Please enter your name to appear in the leaderboard!</TypographyWrapper>
      <PaperWrapper>
        <InputBase
            value={name}
            onChange={event => setName(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder='Insert a name'
            sx={{ml: 2, flexGrow: 1}}
          />
          <Button variant='contained' color='success' onClick={onEnterName} sx={{mr: 1}}>
            Add score
          </Button>
      </PaperWrapper>
      {errorMessage !== '' && <AlertWrapper severity="error">{errorMessage}</AlertWrapper>}
    </HighScoreInputWrapper>
  );
}
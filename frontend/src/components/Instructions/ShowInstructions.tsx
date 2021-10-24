import { Button } from "@material-ui/core";

interface ShowInstructionsProps {
  onShowInstructions: () => void;
}

export function ShowInstructions({onShowInstructions}: ShowInstructionsProps) {
  return <Button variant="contained" size="large" onClick={onShowInstructions}>Show instructions</Button>;
}
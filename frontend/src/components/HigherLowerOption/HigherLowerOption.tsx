import { Button } from "@material-ui/core";

interface HigherLowerOptionProps {
  text: string;
  color: string;
  icon: any;
  onOption: () => void;
}

export function HigherLowerOption({ onOption, color, icon, text }: HigherLowerOptionProps) {
  return <Button variant="contained" size="large" color={color} onClick={onOption} endIcon={icon}>{text}</Button>;
}
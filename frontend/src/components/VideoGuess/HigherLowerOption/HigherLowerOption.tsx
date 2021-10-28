import { Button } from "@material-ui/core";
import { ReactNode } from "react";

interface HigherLowerOptionProps {
  text: string;
  color: 'success' | 'error';
  icon: ReactNode;
  onOption: () => void;
}

export function HigherLowerOption({ onOption, color, icon, text }: HigherLowerOptionProps) {
  return <Button variant="contained" size="large" color={color} onClick={onOption} endIcon={icon}>{text}</Button>;
}
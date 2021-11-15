import { Alert } from '@material-ui/core';

interface ErrorProps {
  message: string;
}

export function Error({ message }: ErrorProps) {
  return <Alert variant="filled" severity="error">{message}</Alert>;
}
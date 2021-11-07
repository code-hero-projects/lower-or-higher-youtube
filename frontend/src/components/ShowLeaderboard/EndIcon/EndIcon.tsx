import { Box } from '@material-ui/core';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export function EndIcon() {
  return (
    <Box display="flex">
      <ArrowUpward />
      <ArrowDownward />
    </Box>
  );
}
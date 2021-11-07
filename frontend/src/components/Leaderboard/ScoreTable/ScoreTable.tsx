import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Score } from '../../../models';
import { TableHeader } from './ScoreTableStyled';

interface ScoreTableProps {
  scores: Score[];
}

export function ScoreTable({ scores }: ScoreTableProps) {
  const columns = [
    { id: 'playerName', label: 'Name' },
    { id: 'points', label: 'Points' },
    { id: 'country', label: 'Country' }
  ];

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableHeader
                key={column.id}
                align="center"
              >
                {column.label}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map((score) =>
            <TableRow hover role="checkbox" tabIndex={-1} key={score.points}>
              <TableCell align="center">{score.playerName}</TableCell>
              <TableCell align="center">{score.points}</TableCell>
              <TableCell align="center">{score.country}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
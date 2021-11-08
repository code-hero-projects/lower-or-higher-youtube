import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Score } from '../../../models';
import { TableHeaderWrapper, TableWrapper } from './ScoreTableStyled';

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
    <TableWrapper>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableHeaderWrapper
                key={column.id}
                align="center"
              >
                {column.label}
              </TableHeaderWrapper>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map((score) =>
            <TableRow hover role="checkbox" tabIndex={-1} key={score.points}>
              <TableCell align="center">{score.playerName}</TableCell>
              <TableCell align="center">{score.points}</TableCell>
              <TableCell align="center">{score.countryName}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
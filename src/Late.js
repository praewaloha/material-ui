import React from 'react';
import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontSize: 18,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const rows = [
  createData('Firstname Lastname', 19, 6.0),
  createData('Firstname Lastname', 237, 9.0),
  createData('Firstname Lastname', 262, 16.0),
  createData('Firstname Lastname', 305, 3.7),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
  createData('Firstname Lastname', 356, 16.0),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Time(Late)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>13/06/2018</StyledTableCell>
              <StyledTableCell>09.00</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
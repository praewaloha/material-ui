import React from 'react';
import { withStyles, createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

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

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      padding: theme.spacing(3, 2),
      overflowX: 'auto',
    },
    table: {
      width: '87%',
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(25),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      marginLeft: theme.spacing(0),
      width: 300,
    },
  }),
);

function createData(name: string, time: number, activity: string) {
  return { name, time, activity};
}

const rows = [
  createData('Johnny', 13.45, 'Edit..'),
  createData('Mark', 9.14, 'Login'),
  createData('Tuta', 12.34, 'Add user..'),
  createData('Daniel', 14.02, 'Edit..'),
  createData('David', 15.49, 'Login'),
];

export default function Staff_log() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Box  display="flex" flexDirection="row-reverse">
      <TextField
        id="outlined-search"
        label="Search..."
        type="search"
        className={classes.input}
        margin="dense"
        variant="outlined"
      />
      </Box>
      <Box  display="flex" flexDirection="row-reverse">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>HR Account</StyledTableCell>
            <StyledTableCell align="right">Timestamp</StyledTableCell>
            <StyledTableCell align="right">Acivity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.activity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
      </div>
  );
}
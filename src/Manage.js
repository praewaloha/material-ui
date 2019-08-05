import React from 'react';
import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';

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
      padding: theme.spacing(3, 2),
      overflowX: 'auto',
    },
    table: {
      width: '80%',
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(25),
    },
    input: {
      marginLeft: theme.spacing(0),
      width: 300,
    },
    button: {
      margin: theme.spacing(1),
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
    <div className={classes.root}>
     <Box display="flex" flexDirection="row-reverse">
                    <Button variant="contained" color="primary" className={classes.button}>
                    Export
                    <CloudUploadIcon className={classes.rightIcon} />
                    </Button> 
                     {/* <TextField
        id="outlined-search"
        label="Search..."
        type="search"
        className={classes.input}
        margin="dense"
        variant="outlined"
      /> */}
                </Box>
    <Box display="flex" flexDirection="row-reverse">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>ID</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>5830213023</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </div>
  );
}
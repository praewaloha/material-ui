import React from 'react';
import { withStyles, createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
// import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(1),
      padding: theme.spacing(3, 2),
      overflowX: 'auto',
    },
    table: {
      width: '87%',
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(25),
    },
    iconHover: {
      margin: theme.spacing(0),
      '&:hover': {
        color: red[800],
      },
    },
    iconHoverEdit: {
      margin: theme.spacing(0),
      '&:hover': {
        color: green[800],
      },
    },
    input: {
      width: 300,
      height: 40,
    },
     button: {
      margin: theme.spacing(1),
    },
    dialog: {
      // backgroundColor: theme.palette.background.default,
    }
  }),
);

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


function createData(fname: string, lname: string) {
  return { fname, lname };
}


const rows = [
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
  createData('Firstname', 'Lastname'),
];

export default function Staff_HR() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    <div className={classes.root}>
    <Box  display="flex" flexDirection="row-reverse">
    <AddButton/>
       {/* <Button variant="contained" size="large" color="primary" className={classes.button}
       >
        <AddIcon />
        Add New
      </Button> */}
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
            <StyledTableCell>Firstname</StyledTableCell>
            <StyledTableCell>Lastname</StyledTableCell>
            <StyledTableCell>Update</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.fname}
              </StyledTableCell>
              <StyledTableCell>{row.lname}</StyledTableCell>
              <StyledTableCell>
                <Tooltip title="Edit">
                <EditButton/>
                    {/* <IconButton aria-label="edit" >
                        <EditIcon />
                    </IconButton> */}
                </Tooltip>
              </StyledTableCell>
              <StyledTableCell>
                <Tooltip title="Delete">
                <DeleteButton/>
                    {/* <IconButton aria-label="delete" onClick={handleOpen}>
                        <DeleteIcon />
                    </IconButton> */}
                </Tooltip>
              </StyledTableCell>
              {/* <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  className={classes.dialog}
                >
                  <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      You won't be able to revert this!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">
                      Yes. delete it!
                    </Button>
                    <Button onClick={handleClose} color="secondary" variant="contained">
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
     </div>
  );
}
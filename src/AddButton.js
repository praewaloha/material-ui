import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
     button: {
      margin: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }),
);

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();


  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Box display="flex" flexDirection="row-reverse">
      <Button variant="contained" size="large" color="primary" className={classes.button} onClick={handleClickOpen}>
        add user
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add User</DialogTitle>
        <DialogContent>
          <TextField
        id="outlined-search"
        label="Firstname"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        style={{ width: 250 }}
        // fullWidth
      />
      <TextField
       id="outlined-search"
        label="Lastname"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        style={{ width: 250 }}
        // fullWidth
      />
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        style={{ width: 250 }}
      />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  onClick={handleClose} color="primary">
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
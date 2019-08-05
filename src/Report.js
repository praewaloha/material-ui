import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ReportItem from './ReportItem'
import Manage from './Manage'
import History from './History'
import Event from './Event'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(1),
      padding: theme.spacing(3, 2),
      overflowX: 'auto',
    },
    button: {
      margin: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
  }),
);

export default function Report () {
  
        const classes = useStyles();
        return (
            <div  className={classes.root}>
                <Box display="flex" flexDirection="row-reverse">
                    <Button variant="contained" size="large" color="primary" className={classes.button}>
                    Export
                    <CloudUploadIcon className={classes.rightIcon} />
                    </Button> 
                </Box>
                <Box display="flex" flexDirection="row-reverse">
                <ReportItem />
                </Box>
            </div>
        )
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    MuiGrid: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2" align="center">
                                จำนวนพนักงานที่มาทำงาน
                            </Typography>
                            <Typography variant="h1" component="h2" align="center" >
                                48
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" style={{ color: 'white' }}>ดูลายละเอียดเพิ่มเติม</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2" align="center">
                                จำนวนพนักงานที่มาสาย
                            </Typography>
                            <Typography variant="h1" component="h2" align="center" >
                                17
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" style={{ color: 'white' }}>ดูลายละเอียดเพิ่มเติม</Button>
                        </CardActions>
                    </Card>
                </Grid >
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2" align="center">
                                จำนวนพนักงานที่ขาด
                            </Typography>
                            <Typography variant="h1" component="h2" align="center" >
                                2
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" style={{ color: 'white' }}>ดูลายละเอียดเพิ่มเติม</Button>
                        </CardActions>
                    </Card>

                </Grid >



            </React.Fragment >
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}


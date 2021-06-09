import React from "react";
import StatsCard from "../../../components/StatsCard";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SignIn from "../../Auth/Signin";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <StatsCard/>
                </Grid>
                <Grid item xs={6}>
                    <SignIn/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
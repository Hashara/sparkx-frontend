import React from "react";
import Dashboard from "../components/Dashboard";
import {Grid} from "@material-ui/core";
import PatientTable from "../components/PatientTable";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));


const PatientDetailsPage = () => {
    const classes = useStyles();


    return (
        <Dashboard>
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <PatientTable/>
                    </Paper>
                </Grid>
            </Grid>
        </Dashboard>
    )
}


export default PatientDetailsPage;
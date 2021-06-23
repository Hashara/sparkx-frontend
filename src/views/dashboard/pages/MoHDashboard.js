import React from "react";
import Dashboard from "../components/Dashboard";
import TableComponent from "../components/Table";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import HospitalTable from "../components/HospitalTable";

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

const MoHDashboard = () => {
    const classes = useStyles();

    return (
        <div>
            <Dashboard>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <HospitalTable/>
                    </Paper>
                </Grid>
            </Dashboard>
        </div>
    )
}

export default MoHDashboard;
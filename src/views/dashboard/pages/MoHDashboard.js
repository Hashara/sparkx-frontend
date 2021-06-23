import React from "react";
import Dashboard from "../components/Dashboard";
import TableComponent from "../components/Table";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import HospitalTable from "../components/HospitalTable";
import clsx from "clsx";
import QueueCard from "../components/QueueCard";
import {MoHListItems} from "../components/listItems";

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

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div>
            <Dashboard menuListItems = {MoHListItems}>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                        <HospitalTable/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <QueueCard/>
                    </Paper>
                </Grid>
            </Dashboard>
        </div>
    )
}

export default MoHDashboard;
import React from "react";
import Dashboard from "../components/Dashboard";
import TableComponent from "../components/Table";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import HospitalTable from "../components/HospitalTable";
import clsx from "clsx";
import QueueCard from "../components/QueueCard";
import PatientTable from "../components/PatientTable";

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

const DirectorDashboard = () => {
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div>
            <Dashboard>
                <PatientTable/>
            </Dashboard>
        </div>
    )
}

export default DirectorDashboard;
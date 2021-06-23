import React from "react";
import Dashboard from "../components/Dashboard";
import StatsCard from "../../home/components/StatsCard";
import {Grid} from "@material-ui/core";

const PatientStats = () => {
    return (
        <Dashboard>
            <Grid container>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <StatsCard/>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </Dashboard>
    )
}

export default PatientStats;
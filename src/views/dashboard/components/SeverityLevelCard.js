import React from "react";
import StatsCard from "../../home/components/StatsCard";
import {Grid} from "@material-ui/core";
import logo from "../../../asserts/logo.png";
import Typography from "@material-ui/core/Typography";

const SeverityLevelCard = ({severityLevel}) => {
    return (
        <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                severity
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    )
}

export default SeverityLevelCard;
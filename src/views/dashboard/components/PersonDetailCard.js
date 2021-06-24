import React from "react";
import Dashboard from "../components/Dashboard";
import StatsCard from "../../home/components/StatsCard";
import {Grid, Typography} from "@material-ui/core";

const PersonDetailsCard = ({person}) => {
    return (
        <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <Typography component="h6" variant="h6">
                    name :{person.first_name + " " + person.last_name}
                </Typography>
                <Typography component="h6" variant="h6">
                    role :{person.role}
                </Typography>
                <Typography component="h6" variant="h6">
                    name :{person.email}
                </Typography>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    )
}

export default PersonDetailsCard;
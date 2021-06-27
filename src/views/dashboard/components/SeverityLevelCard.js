import React, {Fragment} from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const SeverityLevelCard = ({severityLevel}) => {
    return (
        <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <Typography component="p" variant="p">
                    &emsp; markedDate: {severityLevel.markedDate}
                </Typography>
                <Typography component="p" variant="p">
                    &emsp; Level: {severityLevel.level}
                </Typography>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    )
}

export default SeverityLevelCard;
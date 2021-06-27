import React from "react";
import Dashboard from "../components/Dashboard";
import StatsCard from "../../home/components/StatsCard";
import {Card, Divider, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import logo from "../../../asserts/logo.png";
import Typography from "@material-ui/core/Typography";

const PatientDetails = ({patient}) => {
    return (
        <Box p={1} bgcolor="background.paper">
            <Card container variant="outlined">
                <Box p={5}>
                    <Grid container>
                        <img src={logo} alt="logo" className='smallest-logo'/>
                        <Typography component="h4" variant="h4">
                            Patient Details
                        </Typography>
                    </Grid>
                    <br/>
                    <Divider/>
                    <br/>
                    <Typography component="p" variant="p">
                        &emsp; Name: &emsp;{patient.first_name + " " + patient.last_name}
                    </Typography>
                    <Typography component="p" variant="p">
                        &emsp; Email: &emsp;{patient.email}
                    </Typography>
                    <Typography component="p" variant="p">
                        &emsp; Birth Date: &emsp;{patient.birthDate}
                    </Typography>
                    <Typography component="p" variant="p">
                        &emsp; Contact: &emsp;{patient.contact}
                    </Typography>
                    <Typography component="p" variant="p">
                        &emsp; Gender: &emsp;{patient.gender}
                    </Typography>
                    <Typography component="p" variant="p">
                        &emsp; District: &emsp;{patient.district}
                    </Typography>
                    <Typography component="p" variant="p">
                        &emsp; Location: &emsp;{"(" + patient.location_x + "," + patient.location_y + ")"}
                    </Typography>
                </Box>
            </Card>
        </Box>
    )
}

export default PatientDetails;
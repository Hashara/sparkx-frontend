import React, {Fragment} from "react";
import {Card, Divider, Grid} from "@material-ui/core";
import logo from "../../../asserts/logo.png";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SeverityLevelCard from "./SeverityLevelCard";

const RecordCard = ({record}) => {
    return (
        <Box p={1} bgcolor="background.paper">
            <Card container variant="outlined">
                <Box p={5}>
                    <Grid container>
                        <img src={logo} alt="logo" className='smallest-logo'/>
                        <Typography component="h4" variant="h4">
                            Active Record
                        </Typography>
                    </Grid>
                    <br/>
                    <Divider/>
                    <Typography component="h6" variant="h6" color="primary">
                        Record details
                    </Typography>
                    <Typography component="p" variant="p">
                        &emsp; Serial Number: &emsp;{record.serialNumber}
                    </Typography>
                    <Typography component="p" variant="p">
                        &emsp; Register Date: &emsp;{record.regDate}
                    </Typography>
                    <br/>
                    <Divider/>
                    {(record.queueNumber > 0) ?
                        <Fragment>
                            <Typography component="h6" variant="h6" color="primary">
                                Queue Details
                            </Typography>
                            <Typography component="h6" variant="h6" color="primary">
                                &emsp; Queue Number: &emsp;{record.queueNumber}
                            </Typography>
                        </Fragment>
                        :
                        <Fragment>
                            <Typography component="h6" variant="h6" color="primary">
                                Hospital Details
                            </Typography>
                            <Typography component="p" variant="p">
                                &emsp; Name: &emsp;{record.hospital.name}
                            </Typography>
                            <Typography component="p" variant="p">
                                &emsp; District: &emsp;{record.hospital.district}
                            </Typography>
                            <Typography component="p" variant="p">
                                &emsp; Location: &emsp;{"(" + record.hospital.location_x + "," + record.hospital.location_y + ")"}
                            </Typography>
                            <Typography component="p" variant="p">
                                &emsp; Bed Number: &emsp;{record.bedId}
                            </Typography>
                            {record.admittedDate ?
                                <Fragment>
                                    <Typography component="p" variant="p">
                                        &emsp; Admitted Date: &emsp;{record.admittedDate}
                                    </Typography>
                                    <br/>
                                    <Divider/>
                                    <Typography component="h7" variant="h7" color="primary">
                                       Severity Level
                                    </Typography>
                                    {record.severityList.map(
                                        severity => (
                                            <SeverityLevelCard severityLevel={severity}/>
                                        )
                                    )}
                                </Fragment>
                                : null}
                        </Fragment>

                    }


                </Box>
            </Card>
        </Box>
    )
}

export default RecordCard;
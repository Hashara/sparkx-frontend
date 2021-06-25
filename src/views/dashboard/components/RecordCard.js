import React from "react";
import {Card, Divider, Grid} from "@material-ui/core";
import logo from "../../../asserts/logo.png";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
                    <Grid container>
                        <br/>
                        <Typography component="h6" variant="h6" color="primary">
                            Hospital Details
                        </Typography>
                    </Grid>
                </Box>
            </Card>
        </Box>
    )
}

export default RecordCard;
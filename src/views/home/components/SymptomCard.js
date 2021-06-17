import React, {useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import {CardMedia} from "@material-ui/core";
import symptoms from "../../../asserts/symptoms.jpg";
import Grid from "@material-ui/core/Grid";
import '../../../index.css';
import Button from "@material-ui/core/Button";
import {Link, withRouter} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    card: {
        minWidth: 275,
        flexGrow: 1,
    },
});

const SymptomCard = () => {
    const classes = useStyles();

    return (
        <Box p={1} bgcolor="background.paper">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Grid container justify="center">
                        <h1>Having COVID-19 symptoms???</h1>
                    </Grid>
                </CardContent>
                <CardMedia>
                    <Grid container className={classes.root}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={2}>
                                <Grid item>
                                    <Box p={1} my={0.5} mx={0.5}>
                                        <img src={symptoms} alt="symptoms" className='symptoms'/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardMedia>
                <Grid container justify="center" p={10}>
                    <Box m={2} pt={2.26}>
                        <Button component={Link} to="/register" variant="contained" color="primary">
                            Register
                        </Button>
                    </Box>
                    <Box m={2} pt={2.26}>
                        <Button component={Link} to="/signin" variant="contained" color="primary">
                            SIGN IN
                        </Button>
                    </Box>
                </Grid>
            </Card>
        </Box>
    );
}

export default SymptomCard;
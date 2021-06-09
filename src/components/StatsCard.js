import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import DropDownComponent from './DropDownComponent'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import RadioButtonComponent from './RadioButtonComponent';
import CalenderComponent from "./CalenderComponent";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const StatsCard = (props) => {
    const classes = useStyles();

    const [stats, setStats] = useState({
        "newCases": 2,
        "recovered": 0,
        "deaths": 1
    })

    return (
        <Box p={1} bgcolor="background.paper">
            <Card className={classes.root}  variant="outlined" >
                <CardContent>
                    <h2>Covid 19 Stats</h2>
                    <Grid container>
                        <Grid item xs ={9}>
                            <CalenderComponent />
                        </Grid>
                        <Grid item xs ={3}>
                            <RadioButtonComponent title={"Level"} />
                            <DropDownComponent label={'Hospital'}/>
                            <DropDownComponent label={'District'}/>
                        </Grid>
                    </Grid>
                    <Box p={.5} bgcolor="background.paper">

                    <Grid container>
                        <Grid item xs={4} >
                            <Box m={.2}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <h4>Cases</h4>
                                        <p>{stats.newCases}</p>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box m={.2}>

                                <Card variant="outlined">
                                    <CardContent>
                                        <h4>Recovered</h4>
                                        <p>{stats.recovered}</p>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box m={.2}>

                                <Card variant="outlined">
                                    <CardContent>
                                        <h4>Deaths</h4>
                                        <p>{stats.deaths}</p>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                    </Box>

                </CardContent>
            </Card>
        </Box>

    );
}

StatsCard.propTypes = {
    newCases: PropTypes.string,
    recovered: PropTypes.string,
    deaths: PropTypes.string
}
export default StatsCard;

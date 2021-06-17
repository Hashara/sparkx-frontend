import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import HospitalDropDown from './HospitalDropDown'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import CalenderComponent from "./CalenderComponent";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import {fetchCovidStats, selectLevelAction} from '../redux/actions/homeActions';
import {connect} from 'react-redux';
import DistrictDropDown from "./DistrictDropDown";

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        height: "100%",
    },
    card: {
        display: 'flex',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardContent: {
        padding: 0,
        "&:last-child": {
            paddingBottom: 0,
        }
    },
});

const StatsCard = ({home, selectLevelAction, fetchCovidStats}) => {
    const classes = useStyles();

    useEffect(() => {
        fetchCovidStats()
    }, [])

    const [radioButtonValue, setRadioButtonValue] = useState('OVERALL');
    const [values, setValues] = useState([{
        label: 'overall',
        value: 'OVERALL'
    }, {
        label: 'country level',
        value: 'COUNTRY'
    }, {
        label: 'district level',
        value: 'DISTRICT'
    }, {
        label: 'hospital level',
        value: 'HOSPITAL'
    },
    ])

    const levelChange = (event) => {
        setRadioButtonValue(event.target.value);
        selectLevelAction(event.target.value);
        fetchCovidStats(home);
    };


    return (
        <Box p={1} bgcolor="background.paper">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Grid container justify="center">
                        <h2>Covid 19 Stats</h2>
                    </Grid>
                    <form>
                        <Grid container>
                            <Grid item xs={8}>
                                <CalenderComponent/>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Level</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1" value={radioButtonValue}
                                                onChange={levelChange}>
                                        {values.map((val) => (
                                            <FormControlLabel value={val.value} control={<Radio/>} label={val.label}/>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <HospitalDropDown/>
                                <DistrictDropDown/>

                            </Grid>
                        </Grid>
                    </form>
                    <Box p={.5} bgcolor="background.paper">
                        {home.stats.covidStats.loading ? (
                            <h1>Loading</h1>
                        ) : (
                            <Grid container>
                                <Grid item xs={4}>
                                    <Card variant="outlined">
                                        <CardContent className={classes.cardContent}>
                                            <Grid container justify="center">
                                                <h4>Cases</h4>
                                            </Grid>
                                            <Grid container justify="center">
                                                <h1>{home.stats.covidStats.newCases}</h1>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card variant="outlined">
                                        <CardContent className={classes.cardContent}>
                                            <Grid container justify="center">
                                                <h4>Recovered</h4>
                                            </Grid>
                                            <Grid container justify="center">
                                                <h1>{home.stats.covidStats.recovered}</h1>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card variant="outlined">
                                        <CardContent className={classes.cardContent}>
                                            <Grid container justify="center">
                                                <h4>Deaths</h4>
                                            </Grid>
                                            <Grid container justify="center">
                                                <h1>{home.stats.covidStats.deaths}</h1>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        )}
                    </Box>

                </CardContent>
            </Card>
        </Box>

    );
}

const mapStateToProps = state => {
    return {
        home: state.home,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectLevelAction: (level) => dispatch(selectLevelAction(level)),
        fetchCovidStats: (val) => dispatch(fetchCovidStats(val))
    }
}

StatsCard.propTypes = {
    newCases: PropTypes.string,
    recovered: PropTypes.string,
    deaths: PropTypes.string
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatsCard);

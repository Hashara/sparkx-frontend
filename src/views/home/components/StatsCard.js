import React, {useState} from 'react';
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
import {selectLevelAction} from '../redux/actions/homeActions';
import {useDispatch} from 'react-redux';
import DistrictDropDown from "./DistrictDropDown";

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
    const dispatch = useDispatch()

    const [stats, setStats] = useState({
        "newCases": 2,
        "recovered": 0,
        "deaths": 1
    })

    const [radioButtonValue, setRadioButtonValue] = useState('OVERALL');
    const [values, setValues] = useState([{
        label: 'overall',
        value: 'OVERALL'
    },{
        label: 'country level',
        value: 'COUNTRY'
    },{
        label: 'district level',
        value: 'DISTRICT'
    },{
        label: 'hospital level',
        value: 'HOSPITAL'
    },
    ])

    const levelChange = (event) => {
        setRadioButtonValue(event.target.value);
        dispatch(selectLevelAction(event.target.value));
    };


    return (
        <Box p={1} bgcolor="background.paper">
            <Card className={classes.root}  variant="outlined" >
                <CardContent>
                    <h2>Covid 19 Stats</h2>
                    <form>
                        <Grid container>
                            <Grid item xs ={9}>
                                <CalenderComponent />
                            </Grid>
                            <Grid item xs ={3}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">{props.title}</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1" value={radioButtonValue} onChange={levelChange }>
                                        {values.map((val)=>(
                                            <FormControlLabel value={val.value} control={<Radio />} label={val.label} />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <HospitalDropDown />
                                <DistrictDropDown />

                            </Grid>
                        </Grid>
                    </form>
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

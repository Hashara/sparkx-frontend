import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import DropDownComponent from './DropDownComponent'
import Grid from '@material-ui/core/Grid';
import {TextField} from "@material-ui/core";
import PropTypes from 'prop-types';
import RadioButtonComponent from './RadioButtonComponent';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        width: 200,
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
                        <Grid item xs ={3}>
                            <RadioButtonComponent title={"Level"} />
                        </Grid>
                        <Grid item xs={9} >
                            <Grid container>
                                <Grid item xs={4}>
                                    <DropDownComponent label={'Hospital'}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DropDownComponent label={'District'}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        id="date"
                                        label="Date"
                                        type="date"
                                        defaultValue={new Date().getDate() + "-" + new Date().getMonth() + "-"
                                        + new Date().getFullYear()}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Box p={1} bgcolor="background.paper">

                                    <Grid container>
                                        <Grid item xs={4} >
                                            <Box m={1}>
                                                <Card variant="outlined">
                                                    <CardContent>
                                                        <h3>New Cases</h3>
                                                        <p>{stats.newCases}</p>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Box m={1}>

                                                <Card variant="outlined">
                                                    <CardContent>
                                                        <h3>Recovered</h3>
                                                        <p>{stats.recovered}</p>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Box m={1}>

                                                <Card variant="outlined">
                                                    <CardContent>
                                                        <h3>Deaths</h3>
                                                        <p>{stats.deaths}</p>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                        </Grid>
                    </Grid>
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

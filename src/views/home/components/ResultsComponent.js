import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {fetchCovidStats, selectLevelAction} from "../redux/actions/homeActions";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";


const useStyles = makeStyles({
    root: {
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

const ResultsComponent = ({home}) => {
    const classes = useStyles();

    return(
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
    )
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsComponent);
import React, {Fragment, useEffect} from "react";
import Dashboard from "../components/Dashboard";
import TableComponent from "../components/Table";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import PatientTable from "../components/PatientTable";
import {fetchCovidStats, fetchHospitalById, selectHospitalAction, selectLevelAction} from "../../../redux";
import {connect} from "react-redux";
import HospitalBedChart from "../components/HospitalBedChart";
import {Typography} from "@material-ui/core";
import CalenderComponent from "../../home/components/CalenderComponent";
import StatsChart from "../components/StatsChart";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const DirectorDashboard = ({
                               auth,
                               home,
                               fetchHospitalById,
                               selectLevelAction,
                               selectHospitalAction,
                               fetchCovidStats,
                               hospitals
                           }) => {
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    useEffect(() => {
        fetchHospitalById(auth.currentUser.currentUser.person.hospitalId)
        selectLevelAction('HOSPITAL')
        selectHospitalAction(auth.currentUser.currentUser.person.hospitalId)
        fetchCovidStats(home);
    }, [])
    return (
        <div>
            <Dashboard>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        {(hospitals.selectedHospital === '') ?
                            null : <HospitalBedChart bedData={hospitals.selectedHospital.beds}/>
                        }
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={9}>
                    <Paper className={classes.paper}>
                        {(hospitals.selectedHospital === '') ?
                            null :
                            <Fragment>
                                <Grid container>
                                    <Grid item xs={6} md={6} lg={9}>
                                        <Typography component="h2" variant="h5" color="primary" gutterBottom>
                                            Covid 19 statistic of Hospital
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6} lg={3}>
                                        <CalenderComponent isStatic={false}/>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} md={6} lg={3}>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <StatsChart stats={home.stats.covidStats} isBar={true}/>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                    </Grid>
                                </Grid>
                            </Fragment>
                        }

                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={fixedHeightPaper}>
                        <PatientTable/>
                    </Paper>
                </Grid>

            </Dashboard>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        home: state.home,
        hospitals: state.hospitals
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchHospitalById: (hospitalId) => dispatch(fetchHospitalById(hospitalId)),
        selectHospitalAction: (hospital) => dispatch(selectHospitalAction(hospital)),
        fetchCovidStats: (val) => dispatch(fetchCovidStats(val)),
        selectLevelAction: (level) => dispatch(selectLevelAction(level)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DirectorDashboard);
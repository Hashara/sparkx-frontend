import React, {useEffect} from "react";
import Dashboard from "../components/Dashboard";
import {Grid} from "@material-ui/core";
import {fetchPatientDetails} from "../../../redux";
import {connect} from "react-redux";
import PatientTable from "../components/PatientTable";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

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


const PatientDetailsPage = ({patientId, fetchPatientDetails, patient}) => {
    const classes = useStyles();

    useEffect(() => {
        fetchPatientDetails(patientId)
    }, [])

    return (
        <Dashboard>
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <PatientTable/>
                    </Paper>
                </Grid>
            </Grid>
        </Dashboard>
    )
}

const mapStateToProps = state => {
    return {
        patient: state.patient,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPatientDetails: (patientId) => dispatch(fetchPatientDetails(patientId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientDetailsPage);
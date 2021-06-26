import React, {useEffect} from "react";
import Dashboard from "../components/Dashboard";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {fetchPatientDetails} from "../../../redux";
import PatientDetails from "../components/PatientDetails";

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

const PatientUserDetails = ({fetchPatientDetails, patient}) => {
    const classes = useStyles();


    useEffect(() => {
        fetchPatientDetails()
    }, [])

    return (
        <Dashboard>
            <Grid container>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    {(patient.patient !== "") ?
                    < PatientDetails patient={patient.patient}/> :null}
                </Grid>
                <Grid item xs={1}>
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
        fetchPatientDetails: () => dispatch(fetchPatientDetails())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientUserDetails);

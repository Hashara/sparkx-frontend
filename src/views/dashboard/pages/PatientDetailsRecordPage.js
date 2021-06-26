import React, {useEffect} from "react";
import Dashboard from "../components/Dashboard";
import {Grid} from "@material-ui/core";
import {fetchPatientDetails, fetchActiveRecords} from "../../../redux";
import {connect} from "react-redux";
import PatientTable from "../components/PatientTable";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import PatientDetails from "../components/PatientDetails";
import RecordCard from "../components/RecordCard";

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


const PatientDetailsRecordPage = ({ activeRecord, patient}) => {
    const classes = useStyles();

    // useEffect(() => {
    //     fetchActiveRecords()
    // }, [])

    return (
        <Dashboard>
            <Grid container>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <PatientDetails patient={patient.patient} />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        {(activeRecord.active_record !== "") ?
                            < RecordCard record={activeRecord.active_record}/> :null}
                    </Paper>
                </Grid>
            </Grid>
        </Dashboard>
    )
}

const mapStateToProps = state => {
    return {
        patient: state.patient,
        activeRecord: state.activeRecord,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPatientDetails: (patientId) => dispatch(fetchPatientDetails(patientId)),
        // fetchActiveRecords: (patientId) => dispatch(fetchActiveRecords(patientId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientDetailsRecordPage);
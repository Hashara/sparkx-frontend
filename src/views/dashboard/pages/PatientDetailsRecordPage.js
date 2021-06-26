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
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";

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

    return (
        <Dashboard>
            <Grid container>
                <Grid item xs={7}>
                    <Paper className={classes.paper}>
                        {(activeRecord.active_record !== "") ?
                            < RecordCard record={activeRecord.active_record}/> :null}
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                        <PatientDetails patient={patient.patient} />

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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientDetailsRecordPage);
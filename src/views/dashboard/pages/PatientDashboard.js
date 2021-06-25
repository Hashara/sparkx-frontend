import React, {useEffect} from "react";
import Dashboard from "../components/Dashboard";
import TableComponent from "../components/Table";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import HospitalTable from "../components/HospitalTable";
import clsx from "clsx";
import QueueCard from "../components/QueueCard";
import RecordCard from "../components/RecordCard";
import {fetchQueues} from "../redux/actions/queueActions";
import {connect} from "react-redux";
import {fetchActiveRecords} from "../redux/actions/ActiveRecordActions";

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

const PatientDashboard = ({fetchActiveRecords, activeRecord}) => {
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    useEffect(() => {
        fetchActiveRecords()
    }, [])

    return (
        <Dashboard>
            <RecordCard record={activeRecord.active_record}/>
        </Dashboard>
    )
}

const mapStateToProps = state => {
    return {
        activeRecord: state.activeRecord,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchActiveRecords: () => dispatch(fetchActiveRecords())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientDashboard);

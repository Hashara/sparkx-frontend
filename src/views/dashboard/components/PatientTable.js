import React, {useEffect} from "react";
import TableComponent from "../components/Table";
import {fetchPatientsOfHospital, fetchPatientDetails, fetchActiveRecords} from "../../../redux";

import {connect} from "react-redux";
import {withRouter, useHistory} from "react-router-dom";


const PatientTable = ({
                          fetchPatientsOfHospital,
                          activeRecord,
                          fetchActiveRecords,
                          patientsOfHospital,
                          fetchPatientDetails
                      }) => {
    useEffect(() => {
        fetchPatientsOfHospital()
    }, [])

    const history = useHistory();

    const onSubmit = (patientId) => {
        fetchPatientDetails(patientId)
        fetchActiveRecords(patientId)
        history.push("/patient-details")
        console.log(patientId);

    }

    const columns = ["patientId", "first_name", "last_name", "gender", "email", "contact", "bedId", "serialNumber", "admitteddate"]

    return (
        (patientsOfHospital.patientsOfHospital) !== "" ?
            <TableComponent rows={patientsOfHospital.patientsOfHospital} columns={columns} excludes={["serialNumber"]}
                            id={["patientId"]}
                            title={"Patient details"} onSubmit={onSubmit} ButtonText={"View More"}/> : null

    )
}

const mapStateToProps = state => {
    return {
        patientsOfHospital: state.patientsOfHospital,
        activeRecord: state.activeRecord,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPatientsOfHospital: () => dispatch(fetchPatientsOfHospital()),
        fetchPatientDetails: patientId => dispatch(fetchPatientDetails(patientId)),
        fetchActiveRecords: patientId => dispatch(fetchActiveRecords(patientId)),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientTable));
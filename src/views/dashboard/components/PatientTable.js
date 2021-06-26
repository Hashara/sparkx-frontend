import React, {useEffect} from "react";
import TableComponent from "../components/Table";
import {fetchPatientsOfHospital} from "../../../redux";

import {connect} from "react-redux";
import { withRouter, useHistory } from "react-router-dom";


const PatientTable = ({fetchPatientsOfHospital, patientsOfHospital}) => {
    useEffect(() => {
        fetchPatientsOfHospital()
    }, [])

    // const history = useHistory();

    const onSubmit = (patientId) => {
        // fetchHospitalById(hospitalId)
        // selectHospitalAction(hospitalId)
        // history.push("/hospital")
        console.log(patientId);

    }

    const columns = ["patientId","first_name", "last_name", "gender", "email", "contact", "bedId", "serialNumber", "admitteddate"]

    return (
        (patientsOfHospital.patientsOfHospital) !== ""  ?
        <TableComponent rows={patientsOfHospital.patientsOfHospital} columns={columns} excludes={["serialNumber"]} id={["serialNumber", "patientId"]}
                        title={"Patient details"} onSubmit={onSubmit} ButtonText = {"View More"}/>: null

    )
}

const mapStateToProps = state => {
    return {
        patientsOfHospital: state.patientsOfHospital
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPatientsOfHospital: () => dispatch(fetchPatientsOfHospital()),

    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientTable));
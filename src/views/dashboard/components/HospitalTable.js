import React, {useEffect} from "react";
import TableComponent from "../components/Table";
import {fetchHospitalById, fetchHospitals, selectHospitalAction} from "../../../redux";

import {connect} from "react-redux";
import { withRouter, useHistory } from "react-router-dom";


const HospitalTable = ({hospitals, fetchHospitals, fetchHospitalById,selectHospitalAction }) => {
    useEffect(() => {
        fetchHospitals()
    }, [])

    const history = useHistory();

    const onSubmit = (hospitalId) => {
        fetchHospitalById(hospitalId)
        selectHospitalAction(hospitalId)
        history.push("/hospital")

    }

    const columns = ["hospitalId", "name", "district", "location_x", "location_y"]

    return (
        <TableComponent rows={hospitals.hospitals} columns={columns} excludes={["hospitalId"]} id={["hospitalId"]}
                        title={"Hospital"} onSubmit={onSubmit} ButtonText = {"View More"}/>

    )
}

const mapStateToProps = state => {
    return {
        hospitals: state.hospitals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHospitals: () => dispatch(fetchHospitals()),
        fetchHospitalById: (hospitalId) => dispatch(fetchHospitalById(hospitalId)),
        selectHospitalAction: (hospital) => dispatch(selectHospitalAction(hospital)),

    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HospitalTable));
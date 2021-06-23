import React, {useEffect} from "react";
import TableComponent from "../components/Table";
import {fetchHospitalById, fetchHospitals} from "../../../redux";

import {connect} from "react-redux";


const HospitalTable = ({hospitals, fetchHospitals, fetchHospitalById }) => {
    useEffect(() => {
        fetchHospitals()
    }, [])

    const onSubmit = (hospitalId) => {
        fetchHospitalById(hospitalId)
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
        fetchHospitalById: (hospitalId) => dispatch(fetchHospitalById(hospitalId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HospitalTable);
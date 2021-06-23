import React, {useEffect} from "react";
import TableComponent from "../components/Table";
import {fetchHospitals} from "../../../redux";

import {connect} from "react-redux";

const onSubmit = (hospitalId) => {
    console.log(hospitalId)
}

const HospitalTable = ({hospitals, fetchHospitals}) => {
    useEffect(() => {
        fetchHospitals()
    }, [])

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
        fetchHospitals: () => dispatch(fetchHospitals())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HospitalTable);
import React, {useEffect} from "react";
import TableComponent from "../components/Table";
import {fetchHospitals} from "../../../redux";

import {connect} from "react-redux";

const HospitalTable = ({hospitals, fetchHospitals}) => {
    useEffect(() => {
        fetchHospitals()
    }, [])

    const columns = ["hospitalId", "name", "district", "location_x", "location_y"]

    // console.log(hospitals.hospitals)
    return (
        // <p>Hello</p>
        <TableComponent rows={hospitals.hospitals} columns={columns} excludes={["hospitalId"]} key={"hospitalId"}
                        title={"Hospital"}/>

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
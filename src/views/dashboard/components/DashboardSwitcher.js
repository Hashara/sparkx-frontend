import React from "react";
import {connect} from "react-redux";
import MoHDashboard from "../pages/MoHDashboard";
import PatientDashboard from "../pages/PatientDashboard";
import DirectorDashboard from "../pages/DirectorDashboard";

const DashboardSwitcher = ({auth}) => {
    console.log(auth.currentUser.currentUser.person.role)
    return (
        (auth.currentUser.currentUser.person.role === "MoH") ?
            <MoHDashboard/> :
            (auth.currentUser.currentUser.person.role === "Patient") ?
                <PatientDashboard/>:
                (auth.currentUser.currentUser.person.role === "Director") ?
                    <DirectorDashboard/>:
                null
    )
}


const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

export default connect(
    mapStateToProps,
    null
)(DashboardSwitcher);
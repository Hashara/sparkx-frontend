import React from "react";
import {connect} from "react-redux";
import MoHDashboard from "../pages/MoHDashboard";
import PatientDashboard from "../pages/PatientDashboard";

const DashboardSwitcher = ({auth}) => {
    console.log(auth.currentUser.currentUser.person.role)
    return (
        (auth.currentUser.currentUser.person.role === "MoH") ?
            <MoHDashboard/> :
            (auth.currentUser.currentUser.person.role === "Patient") ?
                <PatientDashboard/>:
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
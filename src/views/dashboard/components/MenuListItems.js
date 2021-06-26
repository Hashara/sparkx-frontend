import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logOut} from "../../Auth/redux/actions/AuthActions";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const MoHListItems = () => (
    <div>
        <ListItem button component={Link} to="/dashboard" >
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem button component={Link} to="/hospital">
            <ListItemIcon>
                < LocalHospitalIcon/>
            </ListItemIcon>
            <ListItemText primary="Hospitals"/>
        </ListItem>
        <ListItem button component={Link} to="/new-hospital">
            <ListItemIcon>
                <FiberNewIcon/>
            </ListItemIcon>
            <ListItemText primary="New Hospital"/>
        </ListItem>
        <ListItem button component={Link} to="/stats">
            <ListItemIcon>
                <EqualizerIcon/>
            </ListItemIcon>
            <ListItemText primary="Statistics"/>
        </ListItem>
        <ListItem button onClick={logOut}>
            <ListItemIcon>
                <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout"/>
        </ListItem>
    </div>
);

const PatientListItems = () => (
    <div>
        <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Reports"/>
        </ListItem>
        <ListItem button component={Link} to="/stats">
            <ListItemIcon>
                <EqualizerIcon/>
            </ListItemIcon>
            <ListItemText primary="Statistics"/>
        </ListItem>
        <ListItem button component={Link} to="/details">
            <ListItemIcon>
                <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText primary="Details"/>
        </ListItem>
        <ListItem button onClick={logOut}>
            <ListItemIcon>
                <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout"/>
        </ListItem>
    </div>
);

const DirectorListItems = () => (
    <div>
        <ListItem button component={Link} to="/dashboard" >
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem button component={Link} to="/stats">
            <ListItemIcon>
                <EqualizerIcon/>
            </ListItemIcon>
            <ListItemText primary="Statistics"/>
        </ListItem>
        <ListItem button component={Link} to="/patients">
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Patients"/>
        </ListItem>
        <ListItem button onClick={logOut}>
            <ListItemIcon>
                <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout"/>
        </ListItem>
    </div>
);

const MenuListItems = ({auth}) => {
    console.log(auth.currentUser.currentUser.person.role)
    return (
        (auth.currentUser.currentUser.person.role === "MoH") ?
            <MoHListItems/> :
            (auth.currentUser.currentUser.person.role === "Patient") ?
            <PatientListItems/>:
                (auth.currentUser.currentUser.person.role === "Director") ?
                    <DirectorListItems/>:
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
)(MenuListItems);

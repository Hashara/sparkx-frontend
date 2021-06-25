import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

// export const mainListItems = (
//     <div>
//         <ListItem button>
//             <ListItemIcon>
//                 <DashboardIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Dashboard"/>
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <ShoppingCartIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Orders"/>
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <PeopleIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Customers"/>
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <BarChartIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Reports"/>
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <LayersIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Integrations"/>
//         </ListItem>
//     </div>
// );
//
// export const secondaryListItems = (
//     <div>
//         <ListSubheader inset>Saved reports</ListSubheader>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Current month"/>
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Last quarter"/>
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale"/>
//         </ListItem>
//     </div>
// );

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
        <ListItem button>
            <ListItemIcon>
                <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout"/>
        </ListItem>
    </div>
);

const MenuListItems = ({auth}) => {
    // console.log(auth.currentUser.currentUser.person.role)
    return (
        (auth.currentUser.currentUser.person.role === "MoH") ?
            <MoHListItems/> :null

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

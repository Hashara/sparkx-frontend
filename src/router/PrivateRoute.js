import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";


const PrivateRoute = ({component: Component,roles:roles, auth, ...rest}) => {
    console.log( )
    console.log(auth.currentUser.currentUser.person.role)
    return (

        <Route render={props => (
            (auth.loggedIn ) ?
                (roles.includes(auth.currentUser.currentUser.person.role)) ?
                    <Component {...props} /> :
                    <div> <p>Unauthorized</p></div>
                : <Redirect to="/signin" />
        )} />
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

export default connect(
    mapStateToProps,
    null
)(PrivateRoute);
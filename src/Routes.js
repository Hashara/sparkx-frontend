import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import SignIn from "./views/Auth/pages/Signin";
import Register from "./views/Auth/pages/Register";
import SignUp from "./views/Auth/pages/SignUp";
import PrivateRoute from "./router/PrivateRoute";
import MoHDashboard from "./views/dashboard/pages/MoHDashboard";
import PatientStats from "./views/dashboard/pages/PatientStats";

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {App} />
                <Route path= "/signin" exact component={SignIn}/>
                <Route path= "/register" exact component={Register} />
                <Route path= "/signup" exact component={SignUp} />
                <PrivateRoute path="/dashboard" exact component={MoHDashboard} roles={["MoH"]}/>
                <PrivateRoute path="/stats" exact component={PatientStats} roles={["MoH","Patient","Doctor", "Director"]}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
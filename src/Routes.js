import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import SignIn from "./views/Auth/pages/Signin";
import Register from "./views/Auth/pages/Register";
import SignUp from "./views/Auth/pages/SignUp";
import PrivateRoute from "./router/PrivateRoute";
import PatientStats from "./views/dashboard/pages/PatientStats";
import HospitalDetails from "./views/dashboard/pages/HospitalDetails";
import NewHospitalForm from "./views/dashboard/pages/NewHospitalForm";
import DashboardSwitcher from "./views/dashboard/components/DashboardSwitcher";

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {App} />
                <Route path= "/signin" exact component={SignIn}/>
                <Route path= "/register" exact component={Register} />
                <Route path= "/signup" exact component={SignUp} />
                <PrivateRoute path="/dashboard" exact component={DashboardSwitcher} roles={["MoH","Patient","Doctor", "Director"]}/>
                <PrivateRoute path="/stats" exact component={PatientStats} roles={["MoH","Patient","Doctor", "Director"]}/>
                <PrivateRoute path="/hospital" exact component={HospitalDetails} roles={["MoH"]}/>
                <PrivateRoute path="/new-hospital" exact component={NewHospitalForm} roles={["MoH"]}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
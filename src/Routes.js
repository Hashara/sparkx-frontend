import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import SignIn from "./views/Auth/pages/Signin";
import Register from "./views/Auth/pages/Register";
import SignUp from "./views/Auth/pages/SignUp";

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {App} />
                <Route path= "/signin" exact component={SignIn}/>
                <Route path= "/register" exact component={Register} />
                <Route path= "/signup" exact component={SignUp} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
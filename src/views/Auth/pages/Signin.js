import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../../core/Layout";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const SignIn = () => {
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.root}>
                <h2>Signin</h2>
            </div>
        </Layout>
    );
}

export default SignIn;
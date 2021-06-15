import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../../core/Layout";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const SignUp = () => {
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.root}>
                <h2>Sign up</h2>
            </div>
        </Layout>
    );
}

export default SignUp;
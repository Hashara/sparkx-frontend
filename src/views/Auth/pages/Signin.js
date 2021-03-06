import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Card} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import '../../../index.css';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {login} from "../../../redux";
import {connect} from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import logo from "../../../asserts/logo.png";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialValues = {
    email: '',
    password: ''
}


const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Required')
})

const SignIn = ({auth, login}) => {
    const classes = useStyles();
    const history = useHistory();

    const onSubmit = values => {
        login(values.email, values.password)
        if (auth.loggedIn  && !auth.newUser  ) {
            history.push("/dashboard")
        }
    }

    useEffect(() => {
        if (auth.loggedIn && !auth.newUser ) {
            history.push("/dashboard")
        }
    },[])
    return (
        <Box p={1} bgcolor="background.paper" className='vertical-horizontal'>
            <Card container variant="outlined">
                <Box p={5}>
                    <div className={classes.paper}>
                        <img src={logo} alt="logo" className='logo' />
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {auth.error ?
                            <Alert severity="error">
                                {auth.error.message}
                            </Alert>:
                            null}
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {formik => {
                                return (
                                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                        />
                                        <Grid container justify="center" p={10}>

                                            <Button
                                                type="submit"
                                                // fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                            >
                                                Sign In
                                            </Button>
                                        </Grid>
                                        <Grid container justify="center" p={10}>
                                            <Grid item>
                                                <Link href="/register" variant="body2">
                                                    {"Don't have an account? Sign Up"}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </form>
                                )
                            }}
                        </Formik>
                    </div>
                </Box>
            </Card>
        </Box>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);;
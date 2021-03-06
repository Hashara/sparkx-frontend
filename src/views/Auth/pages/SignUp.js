import React, {useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import {Card} from "@material-ui/core";
import register from "../../../asserts/register.png";
import logo from "../../../asserts/logo.png";
import Typography from "@material-ui/core/Typography";
import {Formik} from "formik";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {fetchHospitals, fetchRoleTypes, personRegister} from "../../../redux";
import {connect} from "react-redux";
import Alert from "@material-ui/lab/Alert";
import {useHistory} from "react-router";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
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
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    role: '',
    hospitalId: ''
}

const validationSchema = Yup.object({
    first_name: Yup.string()
        .required('Required'),
    last_name: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Required'),
    confirm_password: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    role: Yup.string()
        .required('Required'),
    hospitalId: Yup.string()
        .required('Required')
})


const SignUp = ({fetchHospitals, hospitals, fetchRoleTypes, roleTypes, personRegister, auth}) => {
    const classes = useStyles();

    useEffect(() => {
        fetchHospitals();
        fetchRoleTypes();
    }, [])

    const history = useHistory();

    const onSubmit = values => {
        personRegister(values)
    }

    return (
        <Box p={1} bgcolor="background.paper" className='register'>
            <Card container variant="outlined" className='vertical-horizontal-large'>
                <Box p={5}>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={logo} alt="logo" className='small-logo'/>
                            <Typography component="h1" variant="h5">
                                Create your NCMS Account
                            </Typography>
                            {auth.error ?
                                <Alert severity="error">
                                    Form error
                                </Alert> :
                                auth.currentUser !== "initial" ?
                                <Alert severity="success">
                                    Registered successfully, login to continue
                                    {/*{history.push("/signin")}*/}
                                </Alert>: null}

                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}>

                                {formik => {
                                    return (
                                        <form className={classes.form} onSubmit={formik.handleSubmit}>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Box mr={1}>
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            id="first_name"
                                                            label="First Name"
                                                            name="first_name"
                                                            value={formik.values.first_name}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                                            helperText={formik.touched.first_name && formik.errors.first_name}
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        variant="outlined"
                                                        margin="dense"
                                                        id="last_name"
                                                        label="Last Name"
                                                        name="last_name"
                                                        value={formik.values.last_name}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                                        helperText={formik.touched.last_name && formik.errors.last_name}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <TextField
                                                variant="outlined"
                                                margin="dense"
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                            />
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Box mr={1}>
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
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
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        variant="outlined"
                                                        margin="dense"
                                                        fullWidth
                                                        name="confirm_password"
                                                        label="Confirm Password"
                                                        type="password"
                                                        id="confirm_password"
                                                        autoComplete="current-password"
                                                        value={formik.values.confirm_password}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                                                        helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Box mr={1}>
                                                        <FormControl
                                                            variant="outlined"
                                                            className={classes.formControl}
                                                            margin="dense"
                                                            fullWidth
                                                        >
                                                            <InputLabel
                                                                htmlFor="outlined-age-native-simple">
                                                                Role
                                                            </InputLabel>
                                                            <Select
                                                                name="role"
                                                                id="role"
                                                                value={formik.values.role}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                error={formik.touched.role && Boolean(formik.errors.role)}
                                                                helperText={formik.touched.role && formik.errors.role}
                                                            >
                                                                {roleTypes.roleTypes.map(role => {
                                                                    if (role !== "Patient"){
                                                                        return <MenuItem value={role}>{role}</MenuItem>
                                                                    }
                                                                })}
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <FormControl
                                                        variant="outlined"
                                                        className={classes.formControl}
                                                        margin="dense"
                                                        fullWidth
                                                    >
                                                        <InputLabel
                                                            htmlFor="outlined-age-native-simple">
                                                            Hospital
                                                        </InputLabel>
                                                        <Select
                                                            name="hospitalId"
                                                            id="hospitalId"
                                                            value={formik.values.hospitalId}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            error={formik.touched.hospitalId && Boolean(formik.errors.hospitalId)}
                                                            helperText={formik.touched.hospitalId && formik.errors.hospitalId}
                                                        >
                                                            {hospitals.hospitals.map(hospital => {
                                                                return <MenuItem
                                                                    value={hospital.hospitalId}>{hospital.name} - {hospital.district}</MenuItem>
                                                            })}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                            <Grid container justify="center" p={10}>

                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.submit}
                                                >
                                                    Sign Up
                                                </Button>
                                            </Grid>
                                        </form>
                                    )
                                }}
                            </Formik>

                        </Grid>
                        <Grid item xs={6} className={classes.paper}>
                            <img src={register} alt="register" className='register'/>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Box>
    );
}

const mapStateToProps = state => {
    return {
        hospitals: state.hospitals,
        roleTypes: state.roleTypes,
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHospitals: () => dispatch(fetchHospitals()),
        fetchRoleTypes: () => dispatch(fetchRoleTypes()),
        personRegister: (values) => dispatch(personRegister(values))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
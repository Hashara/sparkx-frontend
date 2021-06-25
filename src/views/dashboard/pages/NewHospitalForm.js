import React, {Fragment, useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import {Card, Divider} from "@material-ui/core";
import logo from "../../../asserts/logo.png";
import Typography from "@material-ui/core/Typography";
import {Formik} from "formik";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {fetchDistricts, newHospitalRegister, patientRegister} from "../../../redux";
import {connect} from "react-redux";
import Dashboard from "../components/Dashboard";
import * as Yup from 'yup';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import QueueCard from "../components/QueueCard";


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
    }, fixedHeight: {
        height: 10,
    },
}));

const initialValues = {
    name: '',
    district: '',
    location_x: '',
    location_y: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
}

const validationSchema = Yup.object().shape({

    name: Yup.string()
        .required('Required'),
    district: Yup.string()
        .required('Required'),
    location_x: Yup.string()
        .required("Required"),
    location_y: Yup.string()
        .required("Required"),
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
})


const SignUp = ({districts, fetchDistricts, newHospitalRegister}) => {
    const classes = useStyles();

    useEffect(() => {
        fetchDistricts()
    }, [])

    const onSubmit = values => {
        newHospitalRegister({
            hospital: {
                name: values.name,
                district: values.district,
                location_x: values.location_x,
                location_y: values.location_y,
            },
            director: {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                password: values.password,
            }
        })
    }


    return (
        <Dashboard>
            <Box p={1} bgcolor="background.paper">
                <Card container variant="outlined">
                    <Box p={5}>
                        <Grid container>
                            <img src={logo} alt="logo" className='smallest-logo'/>
                            <Typography component="h4" variant="h4">
                                Add new Hospital
                            </Typography>


                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}>

                                {formik => {
                                    return (
                                        <form className={classes.form} onSubmit={formik.handleSubmit}>
                                            <Divider/>
                                            <br/>
                                            <QueueCard isDashboard={false}/>
                                            <Divider/>
                                            <br/>
                                            <Typography component="h6" variant="h6" color="primary">
                                                Hospital Details
                                            </Typography>
                                            <Grid item xs={6}>
                                                <Box mr={1}>

                                                    <TextField
                                                        variant="outlined"
                                                        margin="dense"
                                                        fullWidth
                                                        id="name"
                                                        label="Hospital name"
                                                        name="name"
                                                        value={formik.values.name}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                                        helperText={formik.touched.name && formik.errors.name}
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Box mr={1}>
                                                        <FormControl
                                                            variant="outlined"
                                                            margin="dense"
                                                            label="District"
                                                            fullWidth
                                                        >
                                                            <InputLabel
                                                                htmlFor="outlined-age-native-simple">Districts</InputLabel>
                                                            <Select
                                                                id="district"
                                                                name="district"
                                                                value={formik.values.district}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                error={formik.touched.district && Boolean(formik.errors.district)}
                                                                helperText={formik.touched.district && formik.errors.district}
                                                            >
                                                                {districts.districts.map(dis => {
                                                                    return <MenuItem value={dis}>{dis}</MenuItem>
                                                                })}
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Box mr={1}>

                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            id="location_x"
                                                            label="X"
                                                            name="location_x"
                                                            type="number"
                                                            inputProps={{min: "0", step: "1"}}
                                                            value={formik.values.location_x}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            error={formik.touched.location_x && Boolean(formik.errors.location_x)}
                                                            helperText={formik.touched.location_x && formik.errors.location_x}
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Box mr={1}>

                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            id="location_y"
                                                            label="Y"
                                                            type="number"
                                                            name="location_y"
                                                            inputProps={{min: "0", step: "1"}}
                                                            value={formik.values.location_y}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            error={formik.touched.location_y && Boolean(formik.errors.location_y)}
                                                            helperText={formik.touched.location_y && formik.errors.location_y}
                                                        />
                                                    </Box>
                                                </Grid>
                                            </Grid>

                                            <Divider/>
                                            <br/>
                                            <Typography component="h6" variant="h6" color="primary">
                                                Director Details
                                            </Typography>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Box mr={1}>
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            id="first_name"
                                                            label="First Name"
                                                            name="first_name"
                                                            fullWidth
                                                            value={formik.values.first_name}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            error={formik.touched.first_name &&
                                                            Boolean(formik.errors.first_name)}
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
                                                        fullWidth
                                                        value={formik.values.last_name}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                                        helperText={formik.touched.last_name && formik.errors.last_name}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Box mr={1}>

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
                                                </Box>
                                            </Grid>
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
                                            <Grid container justify="center" p={10}>

                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.submit}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </form>
                                    )
                                }}
                            </Formik>

                        </Grid>
                    </Box>
                </Card>
            </Box>
        </Dashboard>
    );
}

const mapStateToProps = state => {
    return {
        districts: state.districts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDistricts: () => dispatch(fetchDistricts()),
        patientRegister: (values) => dispatch(patientRegister(values)),
        newHospitalRegister: (values) => dispatch(newHospitalRegister(values)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
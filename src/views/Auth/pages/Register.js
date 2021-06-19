import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../../core/Layout";
import Box from "@material-ui/core/Box";
import {Card} from "@material-ui/core";
import register from "../../../asserts/register.png";
import logo from "../../../asserts/logo.png";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import {Formik} from "formik";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import StatsCard from "../../home/components/StatsCard";
import * as Yup from "yup";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(20),
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


const onSubmit = values => {
    console.log(values)
}

const Register = () => {
    const classes = useStyles();
    return (
        <Box p={1} bgcolor="background.paper" className='register'>
            <Card container variant="outlined">
                <Box p={5}>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={logo} alt="logo" className='small-logo'/>
                            <Typography component="h1" variant="h5">
                                Create your NCMS Account
                            </Typography>


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
                                                            required
                                                            id="first_name"
                                                            label="First Name"
                                                            name="first_name"
                                                            autoFocus
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
                                                        required
                                                        id="last_name"
                                                        label="Last Name"
                                                        name="last_name"
                                                        autoFocus
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
                                                margin="dense"
                                                required
                                                fullWidth
                                                id="contact"
                                                label="Contact"
                                                name="contact"
                                                autoComplete="contact"
                                                autoFocus
                                                value={formik.values.contact}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.contact && Boolean(formik.errors.contact)}
                                                helperText={formik.touched.contact && formik.errors.contact}
                                            />
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Box mr={1}>
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
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
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        variant="outlined"
                                                        margin="dense"
                                                        required
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
                                                            name="gender"
                                                            id="gender"
                                                        >
                                                            <InputLabel
                                                                htmlFor="outlined-age-native-simple">
                                                                Gender
                                                            </InputLabel>
                                                            <Select
                                                                value={formik.values.gender}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                error={formik.touched.gender && Boolean(formik.errors.gender)}
                                                                helperText={formik.touched.gender && formik.errors.gender}
                                                            >
                                                                <MenuItem value='male'>Male</MenuItem>
                                                                <MenuItem value='female'>Female</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                                                    {/*        <KeyboardDatePicker*/}
                                                    {/*            disableToolbar*/}
                                                    {/*            variant="inline"*/}
                                                    {/*            format="MM/dd/yyyy"*/}
                                                    {/*            margin="normal"*/}
                                                    {/*            id="date-picker-inline"*/}
                                                    {/*            label="Date picker inline"*/}
                                                    {/*            // value={selectedDate}*/}
                                                    {/*            // onChange={handleDateChange}*/}
                                                    {/*            KeyboardButtonProps={{*/}
                                                    {/*                'aria-label': 'change date',*/}
                                                    {/*            }}*/}
                                                    {/*        />*/}
                                                    {/*</MuiPickersUtilsProvider>*/}
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Box mr={1}>
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            id="district"
                                                            label="District"
                                                            name="district"
                                                            autoFocus
                                                            value={formik.values.district}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            error={formik.touched.district && Boolean(formik.errors.district)}
                                                            helperText={formik.touched.district && formik.errors.district}
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Box mr={1}>

                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            required
                                                            id="location_x"
                                                            label="X"
                                                            name="location_x"
                                                            autoFocus
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
                                                            name="location_y"
                                                            autoFocus
                                                            value={formik.values.location_y}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            error={formik.touched.location_y && Boolean(formik.errors.location_y)}
                                                            helperText={formik.touched.location_y && formik.errors.location_y}
                                                        />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid container justify="center" p={10}>

                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.submit}
                                                >
                                                   Register
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

export default Register;
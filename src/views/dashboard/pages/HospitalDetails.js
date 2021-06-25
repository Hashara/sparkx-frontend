import React, {useEffect, useState, Fragment} from "react";
import Dashboard from "../components/Dashboard";
import {Grid, Typography} from "@material-ui/core";
import HospitalBedChart from "../components/HospitalBedChart";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {connect} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {
    fetchHospitalById,
    fetchHospitals,
    fetchCovidStats,
    selectHospitalAction, selectLevelAction
} from "../../../redux";
import PersonDetailsCard from "../components/PersonDetailCard";
import CalenderComponent from "../../home/components/CalenderComponent";
import StatsChart from "../components/StatsChart";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 400,
    },
}));

const HospitalDetails = ({
                             home,
                             hospitals,
                             fetchHospitals,
                             fetchHospitalById,
                             selectHospitalAction,
                             fetchCovidStats,
                             selectLevelAction,
                             id
                         }) => {
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    const [hospitalVal, setHospitalVal] = useState(home.hospital);

    useEffect(() => {
        fetchHospitalById(hospitalVal)
        fetchHospitals()
        selectLevelAction('HOSPITAL')
        selectHospitalAction(hospitalVal)
        fetchCovidStats(home);
    }, [])


    const handleChange = (event) => {
        setHospitalVal(event.target.value);
        fetchHospitalById(event.target.value);
        selectHospitalAction(event.target.value);
        fetchCovidStats(home);
    };

    return (
        <Dashboard>

            {console.log(hospitalVal)}
            <Grid item xs={12} md={8} lg={9}>
                <Typography component="h3" variant="h3">
                    {(hospitals.selectedHospital === '') ?
                        "select a hospital" : hospitals.selectedHospital.hospital.name + " - " +
                        hospitals.selectedHospital.hospital.district
                    }
                </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                >
                    <InputLabel htmlFor="outlined-age-native-simple">Hospitals</InputLabel>
                    <Select
                        value={hospitalVal}
                        onChange={handleChange}
                        label={hospitalVal}

                    >
                        {hospitals.hospitals.map(hospital => {
                            return <MenuItem
                                value={hospital.hospitalId}>{hospital.name} - {hospital.district}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        {(hospitals.selectedHospital === '') ?
                            null : <HospitalBedChart bedData={hospitals.selectedHospital.beds}/>
                        }
                    </Paper>
                </Grid>


                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        {(hospitals.selectedHospital === '') ?
                            null :
                            <Fragment>
                                <Typography component="h2" variant="h5" color="primary" gutterBottom>
                                    Covid 19 statistic
                                </Typography>
                                <Grid item xs={12} md={12} lg={9}>
                                    <CalenderComponent isStatic={false}/>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <StatsChart stats={home.stats.covidStats}/>
                                    </Grid>
                                </Grid>
                            </Fragment>
                        }

                    </Paper>
                </Grid>

                <Grid item xs={12} md={8} lg={6}>
                    <Paper className={classes.paper}>
                        {(hospitals.selectedHospital === '') ?
                            null :
                            <Fragment>
                                <Typography component="h2" variant="h5" color="primary" gutterBottom>
                                    Director
                                </Typography>
                                {(hospitals.selectedHospital === '') ?
                                    "select a hospital" :
                                    <PersonDetailsCard person={hospitals.selectedHospital.director}/>
                                }
                            </Fragment>
                        }
                    </Paper>
                </Grid>
            </Grid>

        </Dashboard>
    )
}

const mapStateToProps = state => {
    return {
        hospitals: state.hospitals,
        home: state.home,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchHospitals: () => dispatch(fetchHospitals()),
        fetchHospitalById: (hospitalId) => dispatch(fetchHospitalById(hospitalId)),
        selectHospitalAction: (hospital) => dispatch(selectHospitalAction(hospital)),
        fetchCovidStats: (val) => dispatch(fetchCovidStats(val)),
        selectLevelAction: (level) => dispatch(selectLevelAction(level)),

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HospitalDetails);

import React, {useEffect} from "react";
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
import {fetchHospitalById, fetchHospitals} from "../../home/redux/actions/hospitalActions";
import HospitalTable from "../components/HospitalTable";
import QueueCard from "../components/QueueCard";
import PersonDetailsCard from "../components/PersonDetailCard";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 400,
    },
}));

const HospitalDetails = ({hospitals, fetchHospitals, fetchHospitalById}) => {
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    useEffect(() => {
        fetchHospitals()
    }, [])

    const [hospitalVal, setHospitalVal] = React.useState();

    const handleChange = (event) => {
        setHospitalVal(event.target.value);
        fetchHospitalById(event.target.value);
    };

    return (
        <Dashboard>



            <Grid item xs={12} md={8} lg={9}>
                    <Typography component="h3" variant="h3">
                        {(hospitals.selectedHospital === '') ?
                            "select a hospital" : hospitals.selectedHospital.hospital.name + " - " +
                            hospitals.selectedHospital.hospital.district
                        }
                    </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
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
                <Grid item xs={12} md={1} lg={1}>
                </Grid>
                <Grid item xs={12} md={7} lg={8}>
                    <Paper className={fixedHeightPaper}>

                        <Typography component="h2" variant="h5" color="primary" gutterBottom>
                            Director Details
                        </Typography>
                        {(hospitals.selectedHospital === '') ?
                            "select a hospital" :
                            <PersonDetailsCard person={hospitals.selectedHospital.director}/>
                        }
                    </Paper>
                </Grid>
            </Grid>

        </Dashboard>
    )
}

const mapStateToProps = state => {
    return {
        hospitals: state.hospitals
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchHospitals: () => dispatch(fetchHospitals()),
        fetchHospitalById: (hospitalId) => dispatch(fetchHospitalById(hospitalId))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HospitalDetails);

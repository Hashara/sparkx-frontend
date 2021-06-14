import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {fetchHospitals, selectHospitalAction} from "../../../redux";
import {connect, useDispatch, useSelector} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const HospitalDropDown = ({ hospitals, fetchHospitals, selectHospitalAction}) => {
    const classes = useStyles();

    useEffect(() => {
        fetchHospitals()
    },[])

    const [hospitalVal, setHospitalVal] = React.useState( );

    const handleChange = (event) => {
        setHospitalVal(event.target.value);
        selectHospitalAction(event.target.value);
    };

    return hospitals.loading ? (
        <h1>Loading</h1>
    ): hospitals.error ? (
        <h1>Error</h1>
    ) : (<div>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Hospitals</InputLabel>
            <Select
                value={hospitalVal}
                onChange={handleChange}
                label= {hospitalVal}
                // disabled={true}
            >
                {hospitals.hospitals.map(hospital => {
                    return <MenuItem value={hospital.hospitalId}>{hospital.name} - {hospital.district}</MenuItem>
                })}
            </Select>
        </FormControl>
    </div>)
}

HospitalDropDown.propTypes = {
    label: PropTypes.string,
    hospitals: PropTypes.array
}

const mapStateToProps = state => {
    return {
        hospitals: state.hospitals,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchHospitals: () => dispatch(fetchHospitals()),
        selectHospitalAction: (hospital) => dispatch(selectHospitalAction(hospital))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HospitalDropDown);

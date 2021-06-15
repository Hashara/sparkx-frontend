import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {fetchCovidStats, fetchDistricts, selectDistrictAction} from "../../../redux";
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

const DistrictDropDown = ({ home, districts, fetchDistricts, selectDistrictAction, fetchCovidStats}) => {
    const classes = useStyles();

    useEffect(() => {
        fetchDistricts()
    },[])

    const [districtVal, setDistrictVal] = React.useState( );

    const handleChange = (event) => {
        console.log(event.target.value)
        setDistrictVal(event.target.value);
        selectDistrictAction(event.target.value);
        fetchCovidStats(home);
    };

    return districts.loading ? (
        <h1>Loading</h1>
    ): districts.error ? (
        <h1>Error</h1>
    ) : (<div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Districts</InputLabel>
                <Select
                    value={districtVal}
                    onChange={handleChange}
                    label= {districtVal}
                    // disabled={true}
                >
                    {districts.districts.map(dis => {
                        return <MenuItem value={dis}>{dis}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>)
}

DistrictDropDown.propTypes = {
    label: PropTypes.string,
    districts: PropTypes.array
}

const mapStateToProps = state => {
    return {
        districts: state.districts,
        home: state.home
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchDistricts: () => dispatch(fetchDistricts()),
        selectDistrictAction: (district) => dispatch(selectDistrictAction(district)),
        fetchCovidStats: (val) => dispatch(fetchCovidStats(val))

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DistrictDropDown);

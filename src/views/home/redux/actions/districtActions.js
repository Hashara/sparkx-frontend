import axios from "axios";
import {GET_ALL_DISTRICTS} from '../../../../endPoints'

import {
    FETCH_DISTRICT_REQUEST ,
    FETCH_DISTRICT_SUCCESS ,
    FETCH_DISTRICT_FAILURE
} from './districtActionTypes';


export const fetchDistrictRequest = () => {
    return {
        type: FETCH_DISTRICT_REQUEST
    }
}

export const fetchDistrictSuccess = (districts) => {
    return {
        type: FETCH_DISTRICT_SUCCESS,
        payload: districts
    }
}

export const fetchDistrictFailure = (error) => {
    return {
        type: FETCH_DISTRICT_FAILURE,
        payload: error
    }
}

export const fetchDistricts = () => {
    return (dispatch) => {
        dispatch(fetchDistrictRequest)
        axios.get(GET_ALL_DISTRICTS)
            .then(res => {
                const district = res.data
                console.log(res.data)
                dispatch(fetchDistrictSuccess(district))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(fetchDistrictFailure(errorMsg))
            })
    }
}
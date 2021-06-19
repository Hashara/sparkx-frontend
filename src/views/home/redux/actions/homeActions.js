import axios from "axios";

import {
    SELECT_LEVEL,
    SELECT_DATE,
    SELECT_HOSPITAL,
    SELECT_DISTRICT,
    FETCH_COVID_STATS_REQUEST,
    FETCH_COVID_STATS_SUCCESS,
    FETCH_COVID_STATS_FAILURE
} from './homeActionTypes';

import {GET_COVID_STATS} from '../../../../endPoints';

export const selectLevelAction = (level) => ({
    type: SELECT_LEVEL,
    payload: level
});

export const selectDateAction = (date) => ({
    type: SELECT_DATE,
    payload: date
});

export const selectHospitalAction = (hospital) => ({
    type: SELECT_HOSPITAL,
    payload: hospital
});

export const selectDistrictAction = (district) => ({
    type: SELECT_DISTRICT,
    payload: district
});

export const fetchCovidStatsRequest = () => {
    return {
        type: FETCH_COVID_STATS_REQUEST
    }
}

export const fetchCovidStatsSuccess = (covidStats) => {
    return {
        type: FETCH_COVID_STATS_SUCCESS,
        payload: covidStats
    }
}

export const fetchCovidStatsFailure = (error) => {
    return {
        type: FETCH_COVID_STATS_FAILURE,
        payload: error
    }
}


export const fetchCovidStats = () => {
    return (dispatch, getState) => {
        const state = getState()
        dispatch(fetchCovidStatsRequest)
        axios.get(GET_COVID_STATS, {params: {
                level: state.home.level,
                hospitalId: state.home.hospital,
                district: state.home.district,
                date: state.home.date
            }})
            .then(res => {
                const covidStats = res.data;
                dispatch(fetchCovidStatsSuccess(covidStats));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchCovidStatsFailure(errorMsg))
            })
    }
}
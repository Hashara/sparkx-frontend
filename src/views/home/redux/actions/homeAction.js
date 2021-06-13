import {
    SELECT_LEVEL,
    SELECT_DATE,
    SELECT_HOSPITAL,
    SELECT_DISTRICT
} from './actionType';

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
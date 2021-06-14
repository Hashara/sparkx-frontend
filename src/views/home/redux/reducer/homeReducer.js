import produce from "immer";

import {
    SELECT_LEVEL,
    SELECT_DATE,
    SELECT_HOSPITAL,
    SELECT_DISTRICT
} from '../actions/homeActionTypes';

let initialState = {
    level: 'OVERALL',
    hospital: '',
    district: '',
    date: new Date()
}

export default function homeReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case SELECT_LEVEL:
                draft.level = action.payload;
                break;
            case SELECT_DATE:
                draft.date = action.payload;
                break;
            case SELECT_HOSPITAL:
                draft.hospital = action.payload;
                break;
            case SELECT_DISTRICT:
                draft.district = action.payload;
                break;
            default:
                break;
        }
    });
}
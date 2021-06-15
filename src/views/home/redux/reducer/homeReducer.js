import produce from "immer";
import {formatDate} from "../../../../util/Util";

import {
    SELECT_LEVEL,
    SELECT_DATE,
    SELECT_HOSPITAL,
    SELECT_DISTRICT,
    FETCH_COVID_STATS_REQUEST,
    FETCH_COVID_STATS_SUCCESS,
    FETCH_COVID_STATS_FAILURE
} from '../actions/homeActionTypes';

let initialState = {
    level: 'OVERALL',
    hospital: '',
    district: '',
    date: formatDate(new Date()),
    stats: {
        loading: false,
        covidStats: [],
        error:''
    }
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
            case FETCH_COVID_STATS_REQUEST:
                draft.stats.loading = true;
                draft.stats.covidStats =[];
                draft.stats.error = '';
                break;
            case FETCH_COVID_STATS_SUCCESS:
                draft.stats.loading = false;
                draft.stats.covidStats = action.payload;
                draft.stats.error = '';
                break;
            case FETCH_COVID_STATS_FAILURE:
                draft.stats.loading = false;
                draft.stats.covidStats =[];
                draft.stats.error = action.payload;
                break;
            default:
                break;
        }
    });
}
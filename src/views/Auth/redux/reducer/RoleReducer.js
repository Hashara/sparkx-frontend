import produce from "immer";

import {
    FETCH_ROLE_TYPES_REQUEST,
    FETCH_ROLE_TYPES_SUCCESS,
    FETCH_ROLE_TYPES_FAILURE
} from '../actions/RoleActionTypes';

const initialState = {
    loading: false,
    roleTypes: [],
    error: ''
}

export default function roleTypeReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_ROLE_TYPES_REQUEST:
                draft.loading = true;
                break;
            case FETCH_ROLE_TYPES_SUCCESS:
                draft.loading = false;
                draft.roleTypes = action.payload;
                draft.error = '';
                break;
            case FETCH_ROLE_TYPES_FAILURE:
                draft.loading = false;
                draft.roleTypes = [];
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}
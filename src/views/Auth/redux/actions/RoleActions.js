import axios from "axios";
import {GET_ALL_ROLE_TYPE} from '../../../../endPoints'

import {
    FETCH_ROLE_TYPES_REQUEST,
    FETCH_ROLE_TYPES_SUCCESS,
    FETCH_ROLE_TYPES_FAILURE
} from './RoleActionTypes';


export const fetchRoleTypesRequest = () => {
    return {
        type: FETCH_ROLE_TYPES_REQUEST
    }
}

export const fetchRoleTypesSuccess = (districts) => {
    return {
        type: FETCH_ROLE_TYPES_SUCCESS,
        payload: districts
    }
}

export const fetchRoleTypesFailure = (error) => {
    return {
        type: FETCH_ROLE_TYPES_FAILURE,
        payload: error
    }
}

export const fetchRoleTypes = () => {
    return (dispatch) => {
        dispatch(fetchRoleTypesRequest)
        axios.get(GET_ALL_ROLE_TYPE)
            .then(res => {
                const district = res.data
                console.log(res.data)
                dispatch(fetchRoleTypesSuccess(district))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(fetchRoleTypesFailure(errorMsg))
            })
    }
}
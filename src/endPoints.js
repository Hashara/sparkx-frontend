require('dotenv').config();

const BACKEND = process.env.REACT_APP_API

export const GET_ALL_DISTRICTS = BACKEND + "public?cmd=GET_ALL_DISTRICTS";
export const GET_ALL_HOSPITALS = BACKEND + "public?cmd=GET_ALL_HOSPITALS";
export const GET_ALL_ROLE_TYPE = BACKEND + "public?cmd=GET_ALL_ROLE_TYPES";
export const GET_SEVERITY_TYPES_DETAILS = BACKEND + "public?cmd=GET_ALL_SEVERITY_TYPES";

export const GET_HOSPITAL_BY_ID = BACKEND + "person?cmd=HOSPITAL_BY_ID";
export const GET_QUEUE_DETAILS = BACKEND + "moh?cmd=QUEUE_DETAILS";

export const GET_COVID_STATS = BACKEND + "public?cmd=GET_STATUS";

export const GET_ACTIVE_RECORD = BACKEND + "patient?cmd=GET_ACTIVE_RECORD";
export const GET_PATIENT_DETAILS = BACKEND + "patient?cmd=PATIENT_BY_ID";
export const GET_PATIENT_OF_HOSPITAL = BACKEND + "patient?cmd=PATIENTS_BY_HOSPITAL";

export const POST_LOGIN_USER = BACKEND + "public?cmd=LOGIN";
export const POST_REGISTER_PATIENT = BACKEND + "public?cmd=PATIENT_REGISTER";
export const POST_REGISTER_PERSON = BACKEND + "public?cmd=REGISTER";
export const POST_NEW_HOSPITAL = BACKEND + "moh?cmd=ADD_HOSPITAL";

export const POST_MARK_SEVERITY_LEVEL = BACKEND + "doctor?cmd=MARK_SEVERITY";
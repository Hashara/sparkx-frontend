require('dotenv').config();

const BACKEND = process.env.REACT_APP_API

export const GET_ALL_DISTRICTS = BACKEND + "public?cmd=GET_ALL_DISTRICTS";
export const GET_ALL_HOSPITALS = BACKEND + "public?cmd=GET_ALL_HOSPITALS";
export const GET_ALL_ROLE_TYPE = BACKEND + "public?cmd=GET_ALL_ROLE_TYPES";

export const GET_HOSPITAL_BY_ID = BACKEND + "moh?cmd=HOSPITAL_BY_ID&hospitalid=0a03ec4f-6afa-4dab-b08b-9f2521f23d45";

export const GET_COVID_STATS = BACKEND + "public?cmd=GET_STATUS";

export const POST_LOGIN_USER = BACKEND + "public?cmd=LOGIN";
export const POST_REGISTER_PATIENT = BACKEND + "public?cmd=PATIENT_REGISTER";
export const POST_REGISTER_PERSON = BACKEND + "public?cmd=REGISTER";
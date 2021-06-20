require('dotenv').config();

const BACKEND = process.env.REACT_APP_API

export const GET_ALL_DISTRICTS = BACKEND + "public?cmd=GET_ALL_DISTRICTS";
export const GET_ALL_HOSPITALS = BACKEND + "public?cmd=GET_ALL_HOSPITALS";

export const GET_COVID_STATS = BACKEND + "public?cmd=GET_STATUS";

export const POST_LOGIN_USER = BACKEND + "public?cmd=LOGIN";
export const POST_REGISTER_PATIENT = BACKEND + "public?cmd=PATIENT_REGISTER";
export const POST_REGISTER_USER = BACKEND + "public?cmd=REGISTER";
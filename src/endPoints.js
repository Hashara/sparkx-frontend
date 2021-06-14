require('dotenv').config();

const BACKEND = process.env.REACT_APP_API

export const GET_ALL_DISTRICTS = BACKEND + "public?cmd=GET_ALL_DISTRICTS";
export const GET_ALL_HOSPITALS = BACKEND + "public?cmd=GET_ALL_HOSPITALS";
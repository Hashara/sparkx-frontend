require('dotenv').config();

const BACKEND = process.env.REACT_APP_API

export const GET_ALL_DISTRICTS = BACKEND + "public?cmd=GET_ALL_DISTRICTS";
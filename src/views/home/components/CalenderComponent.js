import React, { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker,MuiPickersUtilsProvider  } from "@material-ui/pickers";
import {selectDateAction} from '../redux/actions/homeAction';
import {useDispatch} from 'react-redux';


const CalenderComponent = (props) => {
    const [date, changeDate] = useState(new Date());

    const dispatch = useDispatch()


    const handleChange = (val) => {
        dispatch(selectDateAction(val));
    }

    let enable = false;

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    autoOk
                    orientation="landscape"
                    variant="static"
                    openTo="date"
                    disableFuture = {true}
                    value={date}
                    onChange={val => {
                        changeDate(val);
                        handleChange(val);
                    }}
                />
            </MuiPickersUtilsProvider>
        </>
    );
};

export default CalenderComponent;

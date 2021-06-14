import React, {useState} from "react";
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {selectDateAction} from '../redux/actions/homeActions';
import {connect} from 'react-redux';


const CalenderComponent = ({home, selectDateAction}) => {
    const [date, changeDate] = useState(new Date());

    const handleChange = (val) => {
        selectDateAction(val);
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
                    disableFuture={true}
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

const mapStateToProps = state => {
    return {
        home: state.home,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectDateAction: (date) => dispatch(selectDateAction(date)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalenderComponent);

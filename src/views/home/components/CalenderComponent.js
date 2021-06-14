import React, {useState} from "react";
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {selectDateAction, fetchCovidStats} from '../redux/actions/homeActions';
import {connect} from 'react-redux';
import {formatDate} from '../../../util/Util'


const CalenderComponent = ({home, selectDateAction, fetchCovidStats}) => {
    const [date, changeDate] = useState(new Date());

    const handleChange = (val) => {
        selectDateAction(formatDate(val));
        fetchCovidStats(home);
    }

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
        fetchCovidStats: (val) => dispatch(fetchCovidStats(val))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalenderComponent);

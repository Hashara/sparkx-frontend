import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';

const RadioButtonComponent = (props) => {
    const [value, setValue] = useState('country level');
    const [values, setValues] = useState([{
        label: 'country level',
        value: 'country level'
    },{
        label: 'district level',
        value: 'district level'
    },{
        label: 'hospital level',
        value: 'hospital level'
    }
    ])

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.title}</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                {values.map((val)=>(
                    <FormControlLabel value={val.value} control={<Radio />} label={val.label} />
                ))}
            </RadioGroup>
        </FormControl>
    );
}

RadioButtonComponent.propsTypes ={
    title: PropTypes.string
}

export default RadioButtonComponent;
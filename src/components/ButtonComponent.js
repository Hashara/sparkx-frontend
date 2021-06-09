import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonComponent = (props) => {

        return (
            <div>
               <Button variant="contained" color="primary" onClick={props.onClick}>
                    {props.text}
                </Button>
            </div>
        );
}

ButtonComponent.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonComponent;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";

const ButtonComponent = (props) => {

        return (
            <div>
                <Box m={2} pt={3}>
                   <Button variant="contained" color="primary" onClick={props.onClick}>
                        {props.text}
                    </Button>
                </Box>
            </div>
        );
}

ButtonComponent.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonComponent;

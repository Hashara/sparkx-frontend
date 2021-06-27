import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {fetchSeverityTypes, markSeverityLevel} from "../../../redux";
import {connect} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SeverityDialog = ({fetchSeverityTypes, markSeverityLevel, severityTypes}) =>  {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        fetchSeverityTypes()
    }, [])

    const [level, setLevel] = React.useState( );

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        markSeverityLevel(level)
        setOpen(false);
    };

    const handleChange = (event) => {
        setLevel(event.target.value)
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Mark Severity
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Mark Severity</DialogTitle>
                <DialogContent>
                    {/*<DialogContentText>*/}
                    {/*    Mark Severity*/}
                    {/*</DialogContentText>*/}
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Severity</InputLabel>
                        <Select
                            value={level}
                            onChange={handleChange}
                            label= {level}
                        >

                            {
                                 (severityTypes.severityType !== "") ?
                                severityTypes.severityType.map(severity => {
                                return <MenuItem value={severity}>{severity}</MenuItem>
                            }): null
                            }
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        severityTypes: state.severityTypes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSeverityTypes: () => dispatch(fetchSeverityTypes()),
        markSeverityLevel: level => dispatch(markSeverityLevel(level))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SeverityDialog);
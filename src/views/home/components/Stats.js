import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NativeSelects from './Dropdown'
import Grid from '@material-ui/core/Grid';
import {TextField} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        width: 200,
    },
});

const StatsComponent = ({children}) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Box p={1} bgcolor="background.paper">
            <Card className={classes.root}  variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Covid 19 Stats
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <Grid container>
                            <Grid item xs={4}>
                                <NativeSelects/>
                            </Grid>
                            <Grid item xs={4}>
                                <NativeSelects/>
                            </Grid>
                            <Grid>
                                <TextField
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Typography>
                </CardContent>
            </Card>
        </Box>

    );
}

export default StatsComponent;

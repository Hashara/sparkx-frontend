import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import {CardMedia} from "@material-ui/core";
import symptoms from "../asserts/symptoms.jpg"
import ButtonComponent from "./ButtonComponent";
import Grid from "@material-ui/core/Grid";
import '../index.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        flexGrow: 1,
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

const SymptomCard = (props) => {
    const classes = useStyles();

    return(
        <Box p={1} bgcolor="background.paper">
            <Card className={classes.root}  variant="outlined" >
                <CardContent>
                    <Grid container justify="center"  p={10}>

                        <h1>Having COVID-19 symptoms???</h1>
                    </Grid>
                </CardContent>
                <CardMedia>
                        <Grid container className={classes.root}>
                            <Grid item xs={12}>
                                <Grid container justify="center" spacing={2}>
                                        <Grid item>
                                            <Box p={1} my={0.5} mx={0.5} >
                                                <img src={symptoms} alt="symptoms" className='symptoms'/>
                                            </Box>
                                        </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                </CardMedia>
                <Grid container justify="center"  p={10}>
                    <ButtonComponent text={'Register'}/>
                </Grid>
            </Card>
        </Box>
    );
}

export default SymptomCard;
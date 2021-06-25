import React, {useEffect,Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {fetchQueues} from "../../../redux";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Divider} from "@material-ui/core";

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const QueueCard = ({fetchQueues, queue, isDashboard}) => {
    const classes = useStyles();

    useEffect(() => {
        fetchQueues()
    }, [])
    return (
       <Fragment>
           {(isDashboard) ?
               <Fragment>
                   <Typography component="h2" variant="h5" color="primary" gutterBottom>
                       Queue
                   </Typography>

                   {(queue.queue.length >= 4) ?
                       <div className="main_div">
                           <Typography component="h2" variant="h2" align="center">
                               {queue.queue.length}
                           </Typography>
                           <Typography component="h6" variant="h6">
                               Need a hospital in {queue.queue.district}
                           </Typography>
                           <Box pt={2}>
                               <Button variant="contained" color="secondary" fullWidth>
                                   Create Hospital
                               </Button>
                           </Box>

                       </div>
                       : <Typography component="h1" variant="h1" align="center">
                           {queue.queue.length}
                       </Typography>} </Fragment> :
               <Fragment>
                   <Typography component="h6" variant="h6" color="primary" gutterBottom>
                       Queue Details
                   </Typography>

                   {(queue.queue.length >= 4) ?
                       <Fragment>
                           <Typography component="p" variant="p" >
                               &emsp; Queue length: {queue.queue.length}
                           </Typography>
                           <Typography component="p" variant="p">
                               &emsp; Need a hospital in {queue.queue.district}
                           </Typography>

                       </Fragment>
                       : <Typography component="p" variant="p" >
                           &emsp; Queue length: {queue.queue.length}
                       </Typography>}
               </Fragment>
           }

       </Fragment>

    );
}

const mapStateToProps = state => {
    return {
        queue: state.queue,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchQueues: () => dispatch(fetchQueues())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QueueCard);
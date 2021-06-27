import React, {useState} from "react";
import {Doughnut} from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";

const HospitalBedChart = ({bedData}) => {
    const available = bedData.filter(bed => bed.status === 'available').length
    const unavailable = bedData.filter(bed => bed.status === 'unavailable').length

    const data = {
        labels: ["Available", "Unavailable"],
        datasets: [
            {
                label: "# of Beds",
                data: [available,unavailable],
                backgroundColor: ["rgba(75, 192, 192, 0.8)", "rgba(255, 99, 132, 0.8)",],
                borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)",],
                borderWidth: 1,
            },
        ],
    };


    return (<>
        <Typography component="h2" variant="h5" color="primary" gutterBottom>
            Beds
        </Typography>
        <Doughnut data={data}/>
    </>)
};

export default HospitalBedChart;

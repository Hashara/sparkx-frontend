import React, {useState} from "react";
import {Doughnut} from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";

// const bedData = [
//     {
//         bedId: "1",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
//     {
//         bedId: "2",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
//     {
//         bedId: "3",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
//     {
//         bedId: "4",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
//     {
//         bedId: "5",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
//     {
//         bedId: "6",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
//     {
//         bedId: "7",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
//     {
//         bedId: "8",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
//     {
//         bedId: "9",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
//     {
//         bedId: "10",
//         hospitalId: "0a03ec4f-6afa-4dab-b08b-9f2521f23d45",
//         status: "available",
//     },
// ];


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
